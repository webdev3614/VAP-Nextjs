"use client";

import React,{ useEffect } from "react";

export const ToogleButton = () => {
    const default_left_class = "left-panel flex w-64 flex-col border-r border-secondary bg-background"
    const hidden_left_class = "left-panel-hidden flex w-64 flex-col border-r border-secondary bg-background"
    const default_right_class = "right-panel flex-1 p-8 relative overflow-hidden"
    const full_right_class = "right-panel-full flex-1 p-8 relative overflow-hidden"
    const [isToogle,setToogle] = React.useState(true);
    useEffect(()=>{
        if(isToogle){
            const left_panel = document.getElementsByClassName(hidden_left_class);
            const right_panel = document.getElementsByClassName(full_right_class);
            if (left_panel.length > 0 && right_panel.length > 0) {
                left_panel[0].className = default_left_class;
                right_panel[0].className = default_right_class;
            } else {
                console.log("Element not found.");
            }
        }else{
            const xpath = "//div[@class='example']";
            const left_panel = document.getElementsByClassName(default_left_class);
            const right_panel = document.getElementsByClassName(default_right_class);
            if (left_panel.length > 0 && right_panel.length > 0) {
                left_panel[0].className = hidden_left_class;
                right_panel[0].className = full_right_class;
            } else {
                console.log("Element not found.");
            }
        }
    })
    const onToogle = () =>{
        setToogle(!isToogle)
    }
    return (
        <div className="w-full h-full"
            onClick={onToogle}>

        </div>
    )
}