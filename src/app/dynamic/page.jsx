import Breadcrumbs from "@/components/dynamicpage/Breadcrumbs";
import Dynamichead from "@/components/dynamicpage/Dynamichead";
import Dynamiccategory from "@/components/dynamicpage/Dynamiccategory";
import Dynamiccontent from "@/components/dynamicpage/Dynamiccontent";
const DynamicPage=()=>{
    return(
        <>
        <Breadcrumbs/>
        <Dynamichead/>
        <Dynamiccategory/>
        <Dynamiccontent/>
        </>
    )
}

export default DynamicPage;