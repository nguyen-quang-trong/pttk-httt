const svg=document.getElementById("hinh-ve");

function taosvg(tag,thuoctinh){
    const phantu=document.createElementNS("http://www.w3.org/2000/svg",tag);
    for(let ten in thuoctinh){
        phantu.setAttribute(ten,thuoctinh[ten]);
    }
    svg.appendChild(phantu);
    return phantu;
}

function vemuiten(loai){
    const defs=document.createElementNS("http://www.w3.org/2000/svg","defs");
    const marker=document.createElementNS("http://www.w3.org/2000/svg","marker");
    const path = document.createElementNS("http://www.w3.org/2000/svg","path");

    if(loai==0) {
        marker.setAttribute("id","arrowr");
        path.setAttribute("d", "M0,0 L10,3 L0,6 Z");
    }
    else {
        marker.setAttribute("id","arrowl");
        path.setAttribute("d", "M10,0 L0,3 L10,6 Z");
    }
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "10");
    marker.setAttribute("refX", "9");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");

    //path.setAttribute("d", "M0,0 L10,3 L0,6 Z");
    path.setAttribute("fill", "#333");

    marker.appendChild(path);
    defs.appendChild(marker);
    svg.appendChild(defs);
}

vemuiten(0);
vemuiten(1);

function vechu(x,y,nd){
    const vb=taosvg("text",{
        x:x,
        y:y,
        "text-anchor": "middle"
    });
    vb.textContent=nd;
}

function vehcn(x,y,cd,cr,nd){
    taosvg("rect",{
        x:x,
        y:y,
        width:cd,
        height:cr,
        fill: "white",
        stroke: "black",
    });
    vechu(x+cd/2,y+cr/2+5,nd);
}

function vexuly(stt,x,y,r,nd){
    taosvg("circle",{
        cx:x,
        cy:y,
        r:r,
        fill:"white",
        stroke:"black"
    });
    taosvg("line",{
        x1:x-Math.sqrt(r*r-((r*0.75)*(r*0.75))),
        y1:y-r*0.75,
        x2:x+Math.sqrt(r*r-((r*0.75)*(r*0.75))),
        y2:y-r*0.75,
        stroke:"black"
    });
    vechu(x,y-r*0.75-5,stt);
    vechu(x,y+5,nd);
}

function vekhodulieu(x,y,cd,nd){
    taosvg("line",{
        x1:x,
        y1:y,
        x2:x+cd,
        y2:y,
        stroke:"black"
    });
    taosvg("line",{
        x1:x,
        y1:y+35,
        x2:x+cd,
        y2:y+35,
        stroke:"black"
    });
    vechu(x+cd/2,y+23,nd);
}
function veluong(loai,x1,y1,x2,y2,nd){
    var mtp,mtt;
    if(loai==0) {
        mtp="url(#arrowr)";
        mtt="null";
    }
    else if(loai==1) {
        mtt="url(#arrowl)";
        mtp="null";
    }
    else {
        mtp="url(#arrowr)";
        mtt="url(#arrowl)";
    }
    taosvg("line",{
        x1:x1,
        y1:y1,
        x2:x2,
        y2:y2,
        stroke:"black",
        "marker-start":mtt,
        "marker-end": mtp
    });
    vechu((x1+x2)/2,(y1+y2)/2-8,nd);
}
