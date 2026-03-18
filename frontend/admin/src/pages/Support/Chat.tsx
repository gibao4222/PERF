import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import  ComponentCard from "../../components/common/ComponentCard";;
export default function Chat() {
    return (
        <>
            <PageMeta
                title="Chats"
                description=""
            />
                
            <PageBreadcrumb pageTitle="Chats" />
            <ComponentCard title="Chat">
                hello
            </ComponentCard>
        </>

    );
}