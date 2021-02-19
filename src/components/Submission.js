import React from 'react';
import { Link } from 'react-router-dom';
const Submission = ()=> (
    <div>
        <h2>Paper Submission</h2>
        <p>Paper submission will be handled via the CMT system. Please submit your paper at <a href="https://cmt3.research.microsoft.com/CICAI2021/" target="_blank">https://cmt3.research.microsoft.com/CICAI2021/</a></p>
        <p>Submissions can be edited until the deadline. Please see <Link to="/deadlines">deadline dates</Link> on the website for further details on the schedule.</p>
        <p>For the paper submission process, please see the <a href={process.env.PUBLIC_URL + '/CMT_CICAI_instructions.pdf'} target="_blank">CMT instructions for authors</a> file for detail instructions on how to navigate the CMT submission site.</p>
        <p>CICAI 2021 uses double-blind review. Manuscripts should be original, written in English, and in accordance with the standard Springer 1-column paper template (10-page of technical content + 2-page references). <b>All accepted papers will be EI indexed by Springer. Outstanding accepted papers will be invited to be extended and published in the special issues of “Science China Information Sciences”, and “Journal of Tsinghua University (Science and Technology)”. </b> CICAI 2021 will be a hybrid conference with both online and in-person presentations. </p>
    </div>
);

export default Submission;