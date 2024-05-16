'use client'

import React, { useEffect } from 'react';
import './styles/BackgroundBest.css';

export default function BackgroundBest() {
    useEffect(() => {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var drops = [];
        var dropCount = 300;

        for (var i = 0; i < dropCount; i++) {
            drops[i] = new Drop();
        }

        function Drop() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.length = Math.random() * 15;
            this.speed = Math.random() * 3 + 1;
        }

        Drop.prototype.draw = function() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.lineWidth = 0.5; // Уменьшаем толщину линии
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; // Белые капли
            ctx.stroke();
        }

        Drop.prototype.update = function() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
                this.speed = Math.random() * 3 + 1;
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < dropCount; i++) {
                drops[i].draw();
                drops[i].update();
            }
            requestAnimationFrame(draw);
        }

        draw();
    }, []);

    return (
        <div className="rainy-background">
            <canvas id="canvas"></canvas>
        </div>
    );
}
