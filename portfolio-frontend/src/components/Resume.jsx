"use client";
import React, { useContext } from 'react';
import { globalContext } from '../contextApi/GlobalContext';
import { useRouter } from 'next/navigation'; // Updated import for Next.js 12+
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Resume = () => {
    const { data } = useContext(globalContext);
    const router = useRouter();

    const resumeCard = () => {
        console.log("hi");
        try {
            if (data.id) {
                router.push('/resume');
            } else {
                console.log("err occurred", data);
                toast("Please fill your data in profile section");
            }
        } catch (err) {
            console.log(err);
            toast("Login to continue");
        }
    };

    const leftArrow = () => {
        console.log("clicked")
        let left = document.getElementsByClassName('holder-resume')[0];
        left.scrollBy(-360, 0);
    }
    const rightArrow = () => {
        console.log("clicked");
        let right = document.getElementsByClassName('holder-resume')[0];
        right.scrollBy(360, 0);
    }

    return (
        <div className='resume'>
            <h4 style={{ color: 'white' }}>Resume (choose templates)</h4>
            <span className='left-arrow' onClick={leftArrow}><BsFillArrowLeftCircleFill size={40} /></span>
            <span className='right-arrow' onClick={rightArrow}><BsFillArrowRightCircleFill size={40} /></span>
            <div className='holder-resume'>
                <div className="resume-card" onClick={resumeCard}>
                    <img src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg" alt="" />
                </div>
                <div className="resume-card" onClick={()=> window.open('https://www.overleaf.com/latex/templates/naman-cv/jqvyjpxhcxyg')}>
                    <img src="https://cdn.enhancv.com/single_column_resume_template_2_120817dd43.png" alt="" />
                </div>
                <div className="resume-card" onClick={()=>window.open('https://www.overleaf.com/latex/templates/resume/rysrqppxyvdg')}>
                    <img src="https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg" alt="" />
                </div>
                <div className="resume-card" onClick={()=>window.open('https://www.overleaf.com/articles/resume/zdxtmtpsjjgv')}>
                    <img src="https://gdoc.io/uploads/University-Student-Resume-Template-web1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Resume;
