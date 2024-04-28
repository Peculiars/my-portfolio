// import React, { useEffect } from 'react'

// export const useThemeSwitcher = () => {
//   const preferDarkQuery = "(prefer-color-scheme: dark)";
//   const [mode, setMode] = ("");

//   useEffect(()=>{
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = window.localStorage.getItem("theme");

//     const handleChange=()=>{
//         if(userPref){
//             let check = userPref === 'dark'? 'dark' : 'light';
//             setMode(check);
//             if(check === 'dark'){
//                 document.documentElement.classList.add('dark');
//             }else{
//                 document.documentElement.classList.remove('dark')
//             }
//         }else{
//             let check = mediaQuery.matches ? 'dark' : 'light';
//             setMode(check);

//             if(check === 'dark'){
//                 document.documentElement.classList.add('dark');
//             }else{
//                 document.documentElement.classList.remove('dark')
//             }
//         }
//     }

//     mediaQuery.addEventListener('change', handleChange);

//     return ()=> mediaQuery.removeEventListener('change', handleChange)
//   },[]);

//   useEffect(()=>{
//     if(mode === 'dark'){
//         window.localStorage.setItem('theme', 'dark')
//         document.documentElement.classList.add('dark');
//     }else{
//         window.localStorage.setItem('theme', 'dark')
//         document.documentElement.classList.remove('dark');
//     }
//   },[mode])

//   return [mode, setMode]
// }


import { useEffect, useState } from 'react';

export const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            const check = userPref === 'dark' || mediaQuery.matches ? 'dark' : 'light';
            setMode(check);

            if (check === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        handleChange(); // Call once to set initial mode

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, []);

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        window.localStorage.setItem('theme', newMode);

        if (newMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return [mode, toggleMode];
}
