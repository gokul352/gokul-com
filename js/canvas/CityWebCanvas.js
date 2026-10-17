// Interactive HTML5 Canvas Engine: Realistic Spider-Man Geometric Silk Webs & Physics

export class CityWebCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            targetX: window.innerWidth / 2,
            targetY: window.innerHeight / 2,
            vx: 0,
            vy: 0,
            lastX: window.innerWidth / 2,
            lastY: window.innerHeight / 2,
            active: false
        };

        this.buildings = [];
        this.fogParticles = [];
        this.spiderWebs = [];
        this.dynamicSlings = [];
        this.dewDrops = [];
        this.time = 0;
        this.animationFrameId = null;

        this.init();
    }

    init() {
        this.resize();
        this.createBuildings();
        this.createFog();
        this.createRealisticWebs();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('mouseleave', () => { this.mouse.active = false; });
        
        this.animate();
    }

    resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.ctx.resetTransform ? this.ctx.resetTransform() : this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(dpr, dpr);

        this.createBuildings();
        this.createRealisticWebs();
    }

    onMouseMove(e) {
        this.mouse.lastX = this.mouse.targetX;
        this.mouse.lastY = this.mouse.targetY;
        this.mouse.targetX = e.clientX;
        this.mouse.targetY = e.clientY;
        this.mouse.vx = this.mouse.targetX - this.mouse.lastX;
        this.mouse.vy = this.mouse.targetY - this.mouse.lastY;
        this.mouse.active = true;

        const speed = Math.sqrt(this.mouse.vx * this.mouse.vx + this.mouse.vy * this.mouse.vy);
        if (speed > 8 && this.dynamicSlings.length < 8) {
            this.spawnWebSling(e.clientX, e.clientY);
        }
    }

    spawnWebSling(targetX, targetY) {
        const anchors = [
            { x: 0, y: 0 },
            { x: this.width, y: 0 },
            { x: this.width * 0.25, y: 0 },
            { x: this.width * 0.75, y: 0 },
            { x: 0, y: this.height * 0.3 },
            { x: this.width, y: this.height * 0.3 }
        ];
        
        anchors.sort((a, b) => {
            const da = Math.hypot(a.x - targetX, a.y - targetY);
            const db = Math.hypot(b.x - targetX, b.y - targetY);
            return da - db;
        });

        const anchor = anchors[0];
        this.dynamicSlings.push({
            ax: anchor.x,
            ay: anchor.y,
            tx: targetX,
            ty: targetY,
            life: 1.0,
            decay: 0.035 + Math.random() * 0.02,
            sag: (Math.random() - 0.5) * 35,
            color: Math.random() > 0.4 ? '#ffffff' : '#ff1e43',
            width: 1.2 + Math.random() * 0.8
        });
    }

    createBuildings() {
        this.buildings = [];
        const numBuildings = Math.floor(this.width / 45);
        let currentX = 0;

        for (let i = 0; i < numBuildings; i++) {
            const w = 35 + Math.random() * 45;
            const h = 160 + Math.random() * (this.height * 0.5);
            const layer = Math.random() > 0.4 ? 1 : 2;

            const windows = [];
            const cols = Math.floor(w / 8);
            const rows = Math.floor(h / 14);
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (Math.random() > 0.6) {
                        const isRed = Math.random() > 0.75;
                        windows.push({
                            x: c * 7 + 4,
                            y: r * 12 + 6,
                            color: isRed ? '#ff1e43' : '#ffffff'
                        });
                    }
                }
            }

            this.buildings.push({ x: currentX, w: w, h: h, layer: layer, windows: windows });
            currentX += w - (Math.random() * 8);
        }
    }

    createFog() {
        this.fogParticles = [];
        for (let i = 0; i < 25; i++) {
            this.fogParticles.push({
                x: Math.random() * this.width,
                y: this.height - Math.random() * (this.height * 0.65),
                radius: 80 + Math.random() * 140,
                speedX: (Math.random() - 0.5) * 0.25,
                color: Math.random() > 0.5 ? 'rgba(255, 30, 67, 0.06)' : 'rgba(255, 255, 255, 0.03)'
            });
        }
    }

    createRealisticWebs() {
        this.spiderWebs = [];
        this.dewDrops = [];

        // 1. TOP-LEFT CORNER ORB WEB
        const webTL = this.buildOrbWeb(0, 0, 9, 0, Math.PI * 0.52, 7, 340);
        this.spiderWebs.push(webTL);

        // 2. TOP-RIGHT CORNER ORB WEB
        const webTR = this.buildOrbWeb(this.width, 0, 9, Math.PI * 0.48, Math.PI, 7, 340);
        this.spiderWebs.push(webTR);

        // 3. CENTRAL/HERO ORB-WEAVER WEB
        const heroCenterX = this.width * 0.5;
        const heroCenterY = Math.min(this.height * 0.42, 380);
        const heroRadius = Math.min(this.width * 0.42, 420);
        const webCenter = this.buildOrbWeb(heroCenterX, heroCenterY, 16, 0, Math.PI * 2, 9, heroRadius);
        this.spiderWebs.push(webCenter);
    }

    buildOrbWeb(cx, cy, numSpokes, startAngle, endAngle, numRings, maxRadius) {
        const spokes = [];
        const angleStep = (endAngle - startAngle) / (numSpokes - 1);

        for (let s = 0; s < numSpokes; s++) {
            const angle = startAngle + s * angleStep;
            const spokeNodes = [];

            for (let r = 0; r <= numRings; r++) {
                const distRatio = r / numRings;
                const dist = Math.pow(distRatio, 1.15) * maxRadius;
                const ox = cx + Math.cos(angle) * dist;
                const oy = cy + Math.sin(angle) * dist;

                const nodeObj = {
                    ox: ox,
                    oy: oy,
                    x: ox,
                    y: oy,
                    vx: 0,
                    vy: 0,
                    ringIndex: r,
                    spokeIndex: s,
                    isAnchor: (r === 0 || r === numRings)
                };
                spokeNodes.push(nodeObj);

                if (r > 1 && Math.random() > 0.45) {
                    this.dewDrops.push({
                        nodeRef: nodeObj,
                        radius: 1.0 + Math.random() * 1.6,
                        shimmerSpeed: 1.5 + Math.random() * 2.5,
                        phase: Math.random() * Math.PI * 2,
                        isCrimson: Math.random() > 0.65
                    });
                }
            }
            spokes.push({ angle: angle, nodes: spokeNodes });
        }

        return { cx: cx, cy: cy, spokes: spokes, numRings: numRings };
    }

    updateWebPhysics() {
        const mouseX = this.mouse.x;
        const mouseY = this.mouse.y;
        const mouseActive = this.mouse.active;

        this.spiderWebs.forEach(web => {
            web.spokes.forEach(spoke => {
                spoke.nodes.forEach(node => {
                    if (node.isAnchor) return;

                    const fdx = node.ox - node.x;
                    const fdy = node.oy - node.y;
                    node.vx += fdx * 0.08;
                    node.vy += fdy * 0.08;

                    if (mouseActive) {
                        const mdx = node.x - mouseX;
                        const mdy = node.y - mouseY;
                        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                        const influenceRadius = 140;

                        if (mDist < influenceRadius && mDist > 0) {
                            const force = (1 - mDist / influenceRadius) * 4.5;
                            node.vx += (mdx / mDist) * force;
                            node.vy += (mdy / mDist) * force;
                        }
                    }

                    node.vx += Math.sin(this.time * 0.002 + node.ox * 0.01) * 0.04;
                    node.vy += Math.cos(this.time * 0.0025 + node.oy * 0.01) * 0.03;

                    node.vx *= 0.88;
                    node.vy *= 0.88;

                    node.x += node.vx;
                    node.y += node.vy;
                });
            });
        });

        for (let i = this.dynamicSlings.length - 1; i >= 0; i--) {
            const sling = this.dynamicSlings[i];
            sling.life -= sling.decay;
            if (sling.life <= 0) {
                this.dynamicSlings.splice(i, 1);
            }
        }
    }

    drawRealisticSpiderWebs() {
        this.ctx.save();

        this.spiderWebs.forEach(web => {
            const spokes = web.spokes;
            const numRings = web.numRings;

            // 1. Primary Radial Tension Spokes
            spokes.forEach((spoke, sIdx) => {
                this.ctx.beginPath();
                this.ctx.moveTo(spoke.nodes[0].x, spoke.nodes[0].y);

                for (let r = 1; r < spoke.nodes.length; r++) {
                    this.ctx.lineTo(spoke.nodes[r].x, spoke.nodes[r].y);
                }

                const isRedSpoke = sIdx % 3 === 0;
                this.ctx.strokeStyle = isRedSpoke ? 'rgba(255, 30, 67, 0.45)' : 'rgba(255, 255, 255, 0.35)';
                this.ctx.lineWidth = isRedSpoke ? 1.2 : 0.9;
                this.ctx.stroke();
            });

            // 2. Concentric Spiral Rings with Natural Catenary Sag
            for (let r = 1; r <= numRings; r++) {
                const ringAlpha = 0.22 + (r / numRings) * 0.28;
                const isCrimsonRing = (r % 2 === 0);

                this.ctx.strokeStyle = isCrimsonRing ? `rgba(255, 30, 67, ${ringAlpha * 1.2})` : `rgba(255, 255, 255, ${ringAlpha})`;
                this.ctx.lineWidth = isCrimsonRing ? 1.1 : 0.8;

                for (let s = 0; s < spokes.length - 1; s++) {
                    const n1 = spokes[s].nodes[r];
                    const n2 = spokes[s + 1].nodes[r];

                    const midX = (n1.x + n2.x) / 2;
                    const midY = (n1.y + n2.y) / 2;
                    const toCenterX = web.cx - midX;
                    const toCenterY = web.cy - midY;
                    const centerDist = Math.hypot(toCenterX, toCenterY) || 1;
                    
                    const sagFactor = 8;
                    const cpX = midX + (toCenterX / centerDist) * sagFactor;
                    const cpY = midY + (toCenterY / centerDist) * sagFactor + 2;

                    this.ctx.beginPath();
                    this.ctx.moveTo(n1.x, n1.y);
                    this.ctx.quadraticCurveTo(cpX, cpY, n2.x, n2.y);
                    this.ctx.stroke();
                }

                if (Math.abs(spokes[spokes.length - 1].angle - (spokes[0].angle + Math.PI * 2)) < 0.2) {
                    const nLast = spokes[spokes.length - 1].nodes[r];
                    const nFirst = spokes[0].nodes[r];
                    const midX = (nLast.x + nFirst.x) / 2;
                    const midY = (nLast.y + nFirst.y) / 2;
                    const toCenterX = web.cx - midX;
                    const toCenterY = web.cy - midY;
                    const centerDist = Math.hypot(toCenterX, toCenterY) || 1;
                    const cpX = midX + (toCenterX / centerDist) * 8;
                    const cpY = midY + (toCenterY / centerDist) * 8 + 2;

                    this.ctx.beginPath();
                    this.ctx.moveTo(nLast.x, nLast.y);
                    this.ctx.quadraticCurveTo(cpX, cpY, nFirst.x, nFirst.y);
                    this.ctx.stroke();
                }
            }
        });

        // 3. Dynamic Web Slings Shot towards Cursor
        this.dynamicSlings.forEach(sling => {
            const alpha = sling.life;
            this.ctx.strokeStyle = sling.color === '#ff1e43' ? `rgba(255, 30, 67, ${alpha * 0.9})` : `rgba(255, 255, 255, ${alpha * 0.95})`;
            this.ctx.lineWidth = sling.width;
            this.ctx.shadowColor = sling.color;
            this.ctx.shadowBlur = 8;

            const midX = (sling.ax + sling.tx) / 2;
            const midY = (sling.ay + sling.ty) / 2 + sling.sag * (1 - alpha);

            this.ctx.beginPath();
            this.ctx.moveTo(sling.ax, sling.ay);
            this.ctx.quadraticCurveTo(midX, midY, sling.tx, sling.ty);
            this.ctx.stroke();

            this.ctx.shadowBlur = 0;
        });

        // 4. Glistening Dew Drops
        this.dewDrops.forEach(drop => {
            const node = drop.nodeRef;
            const shimmer = 0.5 + 0.5 * Math.sin(this.time * 0.003 * drop.shimmerSpeed + drop.phase);
            const currentR = drop.radius * (0.8 + 0.4 * shimmer);

            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);
            this.ctx.fillStyle = drop.isCrimson ? `rgba(255, 30, 67, ${0.7 + 0.3 * shimmer})` : `rgba(255, 255, 255, ${0.8 + 0.2 * shimmer})`;
            this.ctx.fill();

            if (shimmer > 0.8) {
                this.ctx.fillStyle = '#ffffff';
                this.ctx.beginPath();
                this.ctx.arc(node.x - currentR * 0.3, node.y - currentR * 0.3, currentR * 0.35, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });

        // 5. Cursor Proximity Reactive Silk Strands
        if (this.mouse.active) {
            this.spiderWebs.forEach(web => {
                web.spokes.forEach((spoke, sIdx) => {
                    const outerNode = spoke.nodes[spoke.nodes.length - 2];
                    if (!outerNode) return;

                    const dx = this.mouse.x - outerNode.x;
                    const dy = this.mouse.y - outerNode.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 220) {
                        const alpha = (1 - dist / 220) * 0.7;
                        const isRed = sIdx % 2 === 0;

                        this.ctx.strokeStyle = isRed ? `rgba(255, 30, 67, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
                        this.ctx.lineWidth = isRed ? 1.5 : 1.0;
                        this.ctx.shadowColor = isRed ? '#ff1e43' : '#ffffff';
                        this.ctx.shadowBlur = 6;

                        const cpX = (outerNode.x + this.mouse.x) / 2 + Math.sin(this.time * 0.004 + sIdx) * 12;
                        const cpY = (outerNode.y + this.mouse.y) / 2 + Math.cos(this.time * 0.004 + sIdx) * 12;

                        this.ctx.beginPath();
                        this.ctx.moveTo(outerNode.x, outerNode.y);
                        this.ctx.quadraticCurveTo(cpX, cpY, this.mouse.x, this.mouse.y);
                        this.ctx.stroke();

                        this.ctx.shadowBlur = 0;
                    }
                });
            });
        }

        this.ctx.restore();
    }

    drawCity() {
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

        const offsetX = (this.mouse.x - this.width / 2) * 0.02;

        const skyGrad = this.ctx.createRadialGradient(
            this.width / 2, this.height * 0.3, 50,
            this.width / 2, this.height / 2, this.width * 0.7
        );
        skyGrad.addColorStop(0, 'rgba(255, 30, 67, 0.22)');
        skyGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.05)');
        skyGrad.addColorStop(1, '#070308');
        
        this.ctx.fillStyle = skyGrad;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.buildings.forEach(b => {
            if (b.layer === 1) {
                const px = b.x + offsetX * 0.4;
                const py = this.height - b.h;
                this.ctx.fillStyle = '#0f0512';
                this.ctx.fillRect(px, py, b.w, b.h);

                b.windows.forEach(w => {
                    this.ctx.fillStyle = w.color;
                    this.ctx.globalAlpha = 0.35;
                    this.ctx.fillRect(px + w.x, py + w.y, 3, 5);
                });
                this.ctx.globalAlpha = 1.0;
            }
        });

        this.buildings.forEach(b => {
            if (b.layer === 2) {
                const px = b.x + offsetX * 1.0;
                const py = this.height - b.h;
                this.ctx.fillStyle = '#070308';
                this.ctx.fillRect(px, py, b.w, b.h);

                this.ctx.fillStyle = '#ff1e43';
                this.ctx.shadowColor = '#ff1e43';
                this.ctx.shadowBlur = 10;
                this.ctx.fillRect(px + b.w / 2 - 1, py - 4, 2, 4);
                this.ctx.shadowBlur = 0;

                b.windows.forEach(w => {
                    this.ctx.fillStyle = w.color;
                    this.ctx.globalAlpha = 0.75;
                    this.ctx.fillRect(px + w.x, py + w.y, 3.5, 6);
                });
                this.ctx.globalAlpha = 1.0;
            }
        });
    }

    drawFog() {
        this.fogParticles.forEach(p => {
            p.x += p.speedX;
            if (p.x < -p.radius) p.x = this.width + p.radius;
            if (p.x > this.width + p.radius) p.x = -p.radius;

            const fogGrad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            fogGrad.addColorStop(0, p.color);
            fogGrad.addColorStop(1, 'transparent');

            this.ctx.fillStyle = fogGrad;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.time = Date.now();
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.drawCity();
        this.drawFog();
        this.updateWebPhysics();
        this.drawRealisticSpiderWebs();

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}

