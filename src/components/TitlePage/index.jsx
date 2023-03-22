import { useEffect } from 'react';

function TitlePage({ titlePage, title, color }) {
    let bgColor = color ? color : "bg-success";
    let changeCss = `border border-dark p-2 text-white text-center ${bgColor}`;
    return (
        <h1 className={changeCss}>
            {
                useEffect(() => {
                    document.title = `${titlePage}`;
                })
            }
            {title}
        </h1>
    )
};

export default TitlePage;