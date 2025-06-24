const r=()=>new Date().getTime(),n=(t,o)=>new Promise(s=>{const e=`${o}_${r()}`,a=JSON.stringify(t);localStorage.setItem(e,a),s(e)});export{n as s};
