'use client'
import { useContext } from "react"
import CommonContext from "../contexts/CommonContext"

export default function useMenuCode(code){
    const { state: { menuCode }, actions: { setMenuCode }} = useContext(CommonContext);
    useEffect(()=>{
        setMenuCode(code)
    }, [code, setMenuCode])

    return [menuCode, setMenuCode]
}