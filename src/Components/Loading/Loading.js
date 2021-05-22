import React,{useEffect} from 'react'
import getvw from '../../utils/getvw'
import './Loading.css'
import { TweenMax ,TweenLite, Sine } from 'gsap'

export default function Loading(props){

    useEffect(()=>{
        var grid = document.querySelector("#grid");

        var sideCount = 20;
        var adjustment = (sideCount % 2) * 0.5;
        var boxSize = (100 / sideCount) + "%";
        var min = -sideCount / 2 + adjustment;
        var max = sideCount / 2 + adjustment;

        for (var y = min; y < max; y++) {
            for (var x = min; x < max; x++) {
                var box = createBox();
                TweenMax.to(box, 1, {
                    z: getvw(70,1366),
                    opacity: 0,
                    delay: (x * x + y * y ) * 0.01,
                    ease: Sine.easeIn,
                    repeat: -1,
                    yoyo: true,
                });
            }
        }
        TweenLite.set("#container", { rotationX: 70 });
        function createBox() {
            var box = document.createElement("div");
            TweenLite.set(box, { className: "box bg-dark", width: boxSize, height: boxSize, borderStyle:'solid',borderColor:'rgba(255,255,255,0.5)',borderWidth:'thin' });
            grid.appendChild(box);
            return box;
        }
    })

    return <div id="perspective" style={{marginLeft:getvw(400,1366)}}>
        <div id="container">
        <div id="grid"></div>
        </div>
  </div>
}