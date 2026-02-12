(function() {
            "use strict";

            // ---------- FLOATING HEARTS ANIMATION (same romantic vibe) ----------
            const canvas = document.getElementById('hearts-canvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let hearts = [];

            function initCanvas() {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            }

            const MAX_HEARTS = 0;
            const HEART_COLORS = [
                'rgba(255, 120, 150, ', 
                'rgba(255, 160, 180, ', 
                'rgba(230, 100, 130, ', 
                'rgba(255, 190, 200, ', 
                'rgba(250, 140, 190, '
            ];

            class Heart {
                constructor() {
                    this.reset();
                }
                reset() {
                    this.x = Math.random() * width;
                    this.y = height + 20 + Math.random() * 70;
                    this.size = 80 + Math.floor(Math.random() * 24);
                    this.speedY = - (0.7 + Math.random() * 1.2);
                    this.speedX = (Math.random() - 0.5) * 0.4;
                    this.opacity = 0.5 + Math.random() * 0.4;
                    this.colorIndex = Math.floor(Math.random() * HEART_COLORS.length);
                    this.rotation = (Math.random() - 0.5) * 0.2;
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (Math.random() < 0.02) {
                        this.speedX += (Math.random() - 0.5) * 0.2;
                        this.speedX = Math.max(-0.8, Math.min(0.8, this.speedX));
                    }
                    if (this.y < -80 || this.x < -80 || this.x > width + 80) {
                        this.reset();
                        this.y = height + 30 + Math.random() * 80;
                    }
                }
                draw() {
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.rotation);
                    ctx.fillStyle = HEART_COLORS[this.colorIndex] + this.opacity + ')';
                    ctx.shadowColor = 'rgba(200, 80, 120, 0.7)';
                    ctx.shadowBlur = 14;
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.font = `900 ${this.size}px "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome"`;
                    ctx.fillText('\uf004', 0, 0);
                    ctx.restore();
                }
            }

            function initHearts() {
                hearts = [];
                for (let i = 0; i < MAX_HEARTS; i++) {
                    let heart = new Heart();
                    heart.y = Math.random() * height * 1.2;
                    heart.x = Math.random() * width;
                    hearts.push(heart);
                }
            }

            function animateHearts() {
                ctx.clearRect(0, 0, width, height);
                hearts.forEach(heart => {
                    heart.update();
                    heart.draw();
                });
                requestAnimationFrame(animateHearts);
            }

            function onWindowResize() {
                initCanvas();
                hearts.forEach(h => {
                    if (h.x > width) h.x = width * 0.9;
                    if (h.y > height + 40) h.y = height * 0.8;
                });
            }

            window.addEventListener('resize', onWindowResize);
            initCanvas();
            initHearts();
            animateHearts();

            // ---------- VALENTINE IMAGES ARRAY ----------
            // images based on your references: 
            // "AIME accuracy / test-time compute / you're the O1 for me" 
            // plus two other robot/flower love illustrations in similar style.
            // Using safe, high-quality placeholder images that match the vibe.
            // For production, replace with actual image paths.
            const valentineImages = [
                {
                    url: "img/01.jpg", // try to fetch, but we use fallbacks
                    caption: "illustration by @simon.scribbles · AIME"
                },
                {
                    url: "img/01.jpg",
                    caption: "you're the O1 for me 🤖❤️"
                },
                {
                    url: "img/01.jpg", 
                    caption: "test-time compute · love log"
                }
            ];

            // Since the actual images from the reference might not be directly accessible,
            // we replace with beautiful,照合する Valentines illustrations that keep the robot theme.
            // I'll use reliable placeholder images that reflect the aesthetic:
            // robot holding heart, AI valentine, etc. (all free, no hotlink issues)
            const VALENTINE_SET = [
                {
                    url: "img/001.jpg", 
                    // robot toy with heart – perfect
                    caption: "В тебе я вижу одни плюсы"
                },
                {
                    url: "img/002.jpg", 
                    caption: "Ты — моя main ветка"
                },
                {
                    url: "img/003.jpg", 
                    caption: "Все тесты с тобой — зелёные"
                },
                {
                    url: "img/004.jpg", 
                    caption: "Я бы потратил последний токен, чтобы …"
                },
                {
                    url: "img/005.jpg", 
                    caption: "С тобой у меня всегда 100% аптайм"
                },
                {
                    url: "img/006.jpg", 
                    caption: "С тобой у меня всегда 100% аптайм"
                },
                {
                    url: "img/007.jpg", 
                    caption: "С тобой у меня всегда 100% аптайм"
                },
                {
                    url: "img/008.jpg", 
                    caption: "С тобой у меня всегда 100% аптайм"
                },
                {
                    url: "img/009.jpg", 
                    caption: "С тобой у меня всегда 100% аптайм"
                }
            ];

            // DOM elements for image card
            const valentineImg = document.getElementById('valentineImg');
            //const valentineCaption = document.querySelector('.valentine-caption');
            const shuffleBtn = document.getElementById('shuffleValentineBtn');

            // function to set random valentine image
            function setRandomValentine() {
                const randomIndex = Math.floor(Math.random() * VALENTINE_SET.length);
                const selected = VALENTINE_SET[randomIndex];
                valentineImg.src = selected.url;
                // update caption: keep heart icons but change text
                //valentineCaption.innerHTML = `<i class="fas fa-heart"></i> ${selected.caption} <i class="fas fa-heart"></i>`;
            }

            // initial random valentine
            setRandomValentine();

            // event listener for shuffle button (new card)
            shuffleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                setRandomValentine();
                // little haptic feedback
            });

            // ---------- BUTTON INTERACTIONS (exactly as reference) ----------
            // extra: click on robot mode: on also changes something subtle? just feedback
            // already handled

        })();