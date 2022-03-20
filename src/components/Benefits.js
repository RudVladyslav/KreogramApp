import React from 'react';
import {Paper} from "@mui/material";
import benefits__block_img_1 from "../../image/benefits/benefits__block/image__1.png";
import benefits__block_img_2 from "../../image/benefits/benefits__block/image__2.png";
import benefits__block_img_3 from "../../image/benefits/benefits__block/image__3.png";
import benefits__block_img_4 from "../../image/benefits/benefits__block/image__4.png";
import results__block_img_1 from "../../image/benefits/results__block/image__1.png";
import results__block_img_2 from "../../image/benefits/results__block/image__2.png";
import results__block_img_3 from "../../image/benefits/results__block/image__3.png";
import results__block_img_4 from "../../image/benefits/results__block/image__4.png";
import Header4 from "./headers/header_4";
import Header5 from "./headers/header_5";
import Typography from "@mui/material/Typography";

const Benefits = () => {
    const first_case = [
        {
            textRu:'Лучшие условия и качество на рынке',
            image:benefits__block_img_1
        },
        {
            textRu:'Безграничное количество бесплатных правок',
            image:benefits__block_img_2
        },
        {
            textRu:'PSD файлы в подарок',
            image:benefits__block_img_3
        },
        {
            textRu:'Бесплатные консультации по любым вопросам',
            image:benefits__block_img_4
        },
    ]
    const second_case = [
        {
            textRu:'Создание клиенту индивидуального стиля для рекламных креативов',
            image:results__block_img_1
        },
        {
            textRu:'Увеличение окупаемости рекламных компаний минимум на 150%',
            image:results__block_img_2
        },
        {
            textRu:'Лучшая конверсия посадочной страницы',
            image:results__block_img_3
        },
        {
            textRu:'Увеличение прибыли',
            image:results__block_img_4
        },
    ]

    return (
        <section className="section-outer section-our-info" id="benefits-position">
            <div className="section-inner">
                <div className="benefits__wrapper">
                    <Header4>Почему мы?</Header4>
                    <div className="benefits__content__wrapper">

                        <Header5>Преимущества работы с нами</Header5>

                        <div className="benefits__block__wrapper">
                            {first_case.map(caseInfo =><Paper key={caseInfo.image} elevation={15} className="benefits__block">
                                <img src={caseInfo.image} alt=""/>
                                <Typography paragraph={true}>{caseInfo.textRu}</Typography>
                            </Paper>)}
                        </div>

                    </div>
                    <div className="benefits__content__wrapper">
                        <Header5>Результаты</Header5>
                        <div className="benefits__block__wrapper">

                            {second_case.map(caseInfo =><Paper key={caseInfo.image} elevation={15} className="benefits__block">
                                <img src={caseInfo.image} alt=""/>
                                <Typography paragraph={true}>{caseInfo.textRu}</Typography>
                            </Paper>)}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
