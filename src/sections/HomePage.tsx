import MainLayout from "../Layouts/MainLayout";

const buttonsList = ["HOME", "ARTISTS", "GALERY", "FLASH DEALS", "CONTACT US"];


export default function HomePage () {
    return (
        <MainLayout
            hero = {
                <div className="px-[25px] py-[31px]">
                    <img src="images/demo/demo-hero.png" alt="" />
                </div>
            }
        >

        </MainLayout>
            
        
    );
}