function TenLine(t){this.element_id=t.element_id,this.w_id=t.w_id,this.h_id=t.h_id,this.color_code=t.color_code,this.w_win=window.innerWidth/2,this.h_win=window.innerHeight,this.stroke_width=t.stroke_width,this.w_svg=0,this.h_svg=0,this.reset_tenline=function(){var t=window.innerWidth/2,e=window.innerHeight-15;console.log("w_svg=",t),console.log("h_svg=",e),this.w_svg=t,this.h_svg=e;var i="stroke:#0080ff;stroke-width:1;";i="",void 0!==this.color_code&&(i+="stroke:"+this.color_code+";"),void 0!==this.stroke_width&&(i+="stroke-width:"+this.stroke_width+";");var n=document.querySelector("#"+this.element_id),o=document.querySelector("#"+this.w_id),s=document.querySelector("#"+this.h_id);n.setAttribute("width",t+"px"),n.setAttribute("height",e+"px");var r=(window.innerWidth-30)/4;console.log("marginLeft",r),n.style.marginLeft=r+"px",o.setAttribute("style",i),o.setAttribute("x1","0"),o.setAttribute("y1","50%"),o.setAttribute("x2","100%"),o.setAttribute("y2","50%"),s.setAttribute("style",i),s.setAttribute("x1","50%"),s.setAttribute("y1","0"),s.setAttribute("x2","50%"),s.setAttribute("y2","100%")},this.element=function(){return document.querySelector("#"+element_id)}}function Luopan(t){this.src=t.src,this.w_luopan=0,this.h_luopan=0,this.element_id=t.element_id,this.deg_number=0,this.my_style="",this.find_transform=function(t){this.deg_number=t.number;document.querySelector("#"+this.element_id);360<=t.number?$("#"+this.element_id).rotate(0):$("#"+this.element_id).rotate({angle:180,animateTo:180-t.number})},this.set_transform=function(t){"left"===t.move?this.deg_number-=t.number:this.deg_number+=t.number;var e="rotate("+this.deg_number+"deg)";document.querySelector("#"+this.element_id).style.transform=e},this.element=function(){return document.querySelector("#"+this.element_id)},this.reset_luopan=function(){var t=document.querySelector("#"+this.element_id);t.src=this.src;var e=0;this.h_luopan>=this.w_luopan&&(this.h_luopan=this.w_luopan,e=this.w_luopan),this.w_luopan>=this.h_luopan&&(this.w_luopan=this.h_luopan);var i=0,n=0;window.innerWidth>=window.innerHeight&&(e=window.innerHeight-30,i=((i=window.innerWidth-window.innerHeight)+17)/2,n=8),window.innerWidth<=window.innerHeight&&(e=window.innerWidth-30,i=((i=window.innerWidth-this.w_luopan)-12)/2,n=((n=window.innerHeight-window.innerWidth)+15)/2),t.setAttribute("width",e+"px");var o="border: 0px solid #000000; position: absolute; z-index: -999; top: "+n+"px; left: "+i+"px;";t.setAttribute("style",o),this.my_style=o,console.log("window.innerWidth=",window.innerWidth),console.log("window.innerHeight=",window.innerHeight),console.log("luopan my_style=",o),console.log("w_luopan=",this.w_luopan),console.log("h_luopan=",this.h_luopan)}}