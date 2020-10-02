import {
    jobj2tree
} from 'nvjson'

import {
    ndcls
} from "ndtreejs"


export interface Dict {
    [k:string]:  Dict  | string ;
}

export interface Nest {
    disp_name: string;
    disabled?: boolean;
    icon_name: string;
    route?: string;
    children?: Nest[];
    [k:string]: any;
}


export interface Nnode {
    disp_name: string;
    disabled?: boolean;
    icon_name: string;
    route?: string;
    $guid: string;
    [k:string]: any;
}


export type Data= Nnode | Nest | Dict;

export function load(data:Data){
    let o:any;
    if(data.hasOwnProperty('$guid')) {
        o = data;
    } else if(data.hasOwnProperty('children')) {
        o = ndcls.load_from_nest_dict(data,"children")
    } else {
        o  = jobj2tree(data)
        o=o.$fstch()
        let sdfs = o.$sdfs()
        sdfs.forEach(
            r=>{
                r.disp_name = r.key;
            }
        )
    }
    return(o)
}


export function set_auto_icon(o:Nnode,enable_auto_icon:boolean):Nnode {
    if(enable_auto_icon){
        let sdfs = o.$sdfs();
        sdfs.forEach(
            r=>{
                let cond = (r.icon_name === undefined);
                if(cond) {
                    r.icon_name = r.disp_name
                } else {
                }
            }
        )
    }
    return(o)
}



