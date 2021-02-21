import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';

const CallForPaper = ()=> (
    <div>
        <h2>Call for Paper</h2>
        <p> The CAAI International Conference on Artificial Intelligence (CICAI) is organized by Chinese Association for Artificial Intelligence (CAAI). CICAI 2021 will be held at Hangzhou, China on May 29th-30th. Hangzhou sits at the head of Hangzhou Bay and is the provincial center in economy, culture, science and education. The aim of CICAI 2021 is to promote advanced research in Artificial Intelligence (AI), and foster scientific exchange between researchers, practitioners, scientists, students, and engineers in AI and its affiliated disciplines. The program committee of CICAI 2021 invites the submission of papers for the technical program of the conference. High-quality original submissions are welcome from research results and applications of all areas of AI including but not limited to the following areas: </p>
        <ul>
            <li>Brain Inspired Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Knowledge Representation and Reasoning</li>
            <li>Data Mining</li>
            <li>Applications of Artificial Intelligence</li>
            <li>Explainability, Understandability, and Verifiability of AI</li>
            <li>Multidisciplinary Research with AI</li>
            <li>AI Ethics, Privacy, Fairness and Security</li>
            <li>Other AI related topics</li>
        </ul>
        <p>Paper submission must be in English. All papers will be double-blind reviewed by the Program Committee based on technical quality, relevance, originality, significance, and clarity. All paper submissions will be handled electronically. Papers that do not comply with the submission policy will be rejected without review.</p>
        <p><b>Each submitted paper should be standard Springer 1-column paper template ((10-page of technical content + 2-page references)</b>. All papers must be submitted electronically through the paper submission system of CMT in PDF format only. If required supplementary material may be submitted as a separate PDF file, but reviewers are not obligated to consider this, and your manuscript should, therefore, stand on its own merits without any supplementary material. Supplementary material will not be published in the proceedings.</p>
        <p>The submitted papers must not be previously published anywhere and must not be under consideration by any other conference or journal during the CICAI review process. Submitting a paper to the conference means that if the paper was accepted, at least one author will complete the regular registration.</p>
        <p><b>All accepted papers will be EI indexed by Springer. Selected papers will be invited to be extended and published in the special issues of “Science China Information Sciences”, and “Tsinghua Science and Technology”.</b> The conference will confer several awards, including Best Paper Award, Best Student Paper Award from the submissions.</p>
        
        <a href={process.env.PUBLIC_URL + '/CFP-CICAI2021.pdf'} class="btn" class={styles['registration_btn']} target="_blank">Call For Paper Flyer</a>

        <h2>Paper Submission</h2>
        <p>Paper submission will be handled via the CMT system. Please submit your paper at <a href="https://cmt3.research.microsoft.com/CICAI2021" target="_blank">https://cmt3.research.microsoft.com/CICAI2021</a></p>
    </div>
);

export default CallForPaper;