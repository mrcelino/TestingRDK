'use client'
import React, { useState } from 'react';
import { FAQHolder } from './FaqHolder';
import { faqData } from './Data';
import FaqTitle from './FaqTitle';

export default function FAQ() {

    return (
        <section className="py-28">
            <FaqTitle />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="accordion-group" data-accordion="default-accordion">
                    {faqData.map((item, index) => (
                        <FAQHolder key={index} answer={item.answer} question={item.question} />
                    ))}
                </div>
            </div>
        </section>
    );
}
