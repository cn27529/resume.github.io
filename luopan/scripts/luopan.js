function TenLine(t){this.element_id=t.element_id,this.w_id=t.w_id,this.h_id=t.h_id,this.color_code=t.color_code,this.w_win=window.innerWidth,this.h_win=window.innerHeight,this.w_svg=0,this.h_svg=0,this.reset_tenline=function(){var t=window.innerWidth-15,e=window.innerHeight-15;console.log("w_svg=",t),console.log("h_svg=",e),this.w_svg=t,this.h_svg=e;var i="stroke:#0080ff;stroke-width:2;";void 0!==this.color_code&&(i="stroke:"+this.color_code+";stroke-width:2;");var s=document.querySelector("#"+this.element_id),o=document.querySelector("#"+this.w_id),r=document.querySelector("#"+this.h_id);s.setAttribute("width",t+"px"),s.setAttribute("height",e+"px"),o.setAttribute("style",i),o.setAttribute("x1","0"),o.setAttribute("y1","50%"),o.setAttribute("x2","100%"),o.setAttribute("y2","50%"),r.setAttribute("style",i),r.setAttribute("x1","50%"),r.setAttribute("y1","0"),r.setAttribute("x2","50%"),r.setAttribute("y2","100%")},this.element=function(){return document.querySelector("#"+element_id)}}