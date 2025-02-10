'use client'
import React, { useState } from 'react';
import { FAQHolder } from './FaqHolder';
import { FaqData, faqData } from './Data';
import FaqTitle from './FaqTitle';

export default function FAQ() {

    const fetchFaqData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(faqData);
            }, 1000);
        });
    };

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    React.useEffect(() => {
        const getData = async () => {
            console.log(`${process.env.app_url}/faqs`)

            const response = await fetch(`http://localhost:1337/api/faqs`);
            const result = await response.json();
            setData(result.data);
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <section className="py-28">
            <FaqTitle />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader"></div>
                    <div className="throbber"></div>
                    <style jsx>{`
                        .throbber {
                            border: 4px solid rgba(0, 0, 0, 0.1);
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            border-left-color: #15575B;
                            animation: spin 1s ease infinite;
                        }

                        @keyframes spin {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }
                    `}</style>
                    </div>
                ) : (
                    <div className="accordion-group" data-accordion="default-accordion">
                        {data.map((item:FaqData, index) => (
                            <FAQHolder key={index} answer={item.answer} question={item.question} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
