import { 
    jobj2tree
} from 'nvjson'


function creat_root_btn_and_open_mat_menu(nd) {
    let key = nd._nd.key
    let guid = nd._nd.$guid
    let cond = nd._nd.$is_leaf()
    let btn = (cond)?`<button mat-button>${key}</button>`:`<button mat-button [matMenuTriggerFor]="${guid}">${key}</button>`
    let open_mat_menu = (cond)?``:`<mat-menu #${guid}="matMenu">`
    let tem = btn+'\n'+open_mat_menu
    tem = tem.trim()
    return(tem.split('\n'))
}


function creat_open_mat_menu(nd) {
    let key = nd._nd.key
    let pguid = nd._nd.$parent().$guid
    let tem = `<mat-menu #${pguid}="matMenu">`
    return(tem)
}

function creat_menu_item_btn(nd) {
    let key = nd._nd.key
    let guid = nd._nd.$guid
    let cond = nd._nd.$is_leaf()
    let tem = (cond)?`<button mat-menu-item>${key}</button>`:`<button mat-menu-item [matMenuTriggerFor]="${guid}">${key}</button>`
    return('    '+tem)
}


function creat_close_mat_menu() {
    let tem = `</mat-menu>`
    return(tem)
}

function is_having_multi_entries(d){
    return(Object.entries(d.root).length>1)
}


export function creat_html(d,indent=0) {
    let cond = is_having_multi_entries(d)
    d = cond?{"@root@":d}:d
    let tree = jobj2tree(d)
    let m = tree.$sdfs2mat()
    let wfs = Array.prototype.concat(...m)
    wfs.forEach(r=>{r._nd.$guid='id_'+r._nd.$guid.replace(/-/g,'_')})
    wfs=wfs.slice(1)
    let nd = wfs[0]
    let heles = creat_root_btn_and_open_mat_menu(nd)
    let prev_pguid = nd._nd.$guid
    for(let i=1;i<wfs.length;i++) {
        nd = wfs[i]
        let key = nd._nd.key
        let guid = nd._nd.$guid
        let pguid = nd._nd.$parent().$guid
        let cond = (pguid !== prev_pguid) 
        let menu_item_hele = creat_menu_item_btn(nd)
        if(cond) {
            let hele = creat_close_mat_menu()
            heles.push(hele)
            hele = creat_open_mat_menu(nd)
            heles.push(hele)
        } else {
            
        }
        heles.push(menu_item_hele)
        prev_pguid = pguid
    }
    if(wfs.length>1) {
        hele = creat_close_mat_menu(nd)
        heles.push(hele)
    }
    heles = heles.map(r=>'    '.repeat(indent)+r)
    return(heles.join('\n'))
}
