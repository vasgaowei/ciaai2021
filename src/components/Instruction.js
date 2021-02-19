import React from 'react';
import { Link } from 'react-router-dom';
const Instruction = ()=> (
    <div>
        <h2>Instructions for Authors</h2>
        <p>Every submission requires a PDF manuscript. For regular papers, they must be submitted by April 18, 2021. There will be no individual exceptions.</p>
        <p>Submissions will not be accepted by e-mail or any other mechanism other than CMT. After submission, the system will not automatically send a confirmation of receipt. If you want to receive a confirmation email, please click the paper ID to view the submission, and then click the “Email” button at the top right to send the confirmation to yourself or all the authors. CICAI2021 will contact authors again only if problems are encountered with papers.</p>
        <h2>Templates</h2>
        <p>CICAI 2021 uses double-blind review. Manuscripts should be original, written in English, and in accordance with the standard Springer 1-column paper template (10-page of technical content + 2-page references); see the <a href="https://github.com/NFSQ1991/CICAI" target="_blank">CICAI2021 author kit </a> for details. Papers must be in trouble-free, high-resolution PDF format, formatted for US Letter (8.5″ x 11″) paper, using Type 1 or TrueType fonts. CICAI2021 submissions are anonymous, and must conform to the instructions (detailed below) for double-blind review. The authors must manually remove all author and affiliation information from their submission for review, and may replace it with other information, such as paper number and keywords. Submissions may an ethics statement if applicable (see below); acknowledgements should be omitted from papers submitted for review, but may be included in these two additional pages for accepted papers.</p>
        <p>Only PDF files are required at the time of submission for review; you will additionally need to submit paper source files if your paper is accepted for publication. </p>
        

        <h2>Policy Concerning Multiple Submissions to Conferences or Journal</h2>
        <p>CICAI2021 will not consider any paper that, at the time of submission, is under review for or has already been published or accepted for publication in any archival venue such as a journal or a conference. (Workshops and preprint servers such as arXiv are acceptable, as described in the paragraph above.) Authors are free to retract a submission from a venue with a concurrent review process (e.g., from NeurIPS or EMNLP) and submit the same work to CICAI2021 as a regular paper provided that this retraction occurs before the CICAI2021 submission. Authors must confirm at the time of submission that the paper is not under review at another archival conference or journal. </p>
        <p>Once they have made a submission to CICAI2021, authors may not submit the same paper to another archival conference or journal until they receive an accept/reject decision from CICAI2021 or they withdraw their submission from CICAI2021. In some cases, it may require a judgement call to determine whether two concurrent submissions constitute a violation of CICAI2021’s multiple submission policy. If a concern is raised about the similarity of two non-identical submissions, at least three people will inspect whatever information is available about both submissions. If they all agree that the simultaneous submission has excessive technical overlap, the paper will be summarily rejected and the organizers of the other conference will be informed about CICAI2021’s decision. As with all summary rejects, such decisions are final. </p>
        
        <h2>Citation and Comparison</h2>
        <p>Papers are expected to cite those refereed publications most relevant to their content, but authors are excused for not knowing about all non-refereed work (e.g, appearing on ArXiv). Nevertheless, in cases where such prior work is widely known in the field, its existence may be considered by reviewers in assessing a submission’s novelty. Papers published less than two months before the regular paper submission deadline (April 18, 2021) are considered contemporaneous to all CICAI2021 submissions (whether submitted as regular or fast track submissions); authors are not obliged to address such papers (though, especially for the camera ready versions of accepted papers, authors are encouraged to do so). </p>
        
        <h2>Supplementary Material</h2>
        <p>Submissions should not contain pointers to supplementary material on the web, as this may violate both blind review and the policy that submissions cannot be changed after they are made available to reviewers. However, authors have the option of submitting supplementary material in support of their submissions. All such material is due no later than May 1st (regular papers). Authors can include one or more of the following: </p>
        <ul>
            <li>a technical appendix (PDF) containing additional details in support of the arguments advanced by the main paper (e.g., proofs, experimental results, descriptions of datasets); </li>
            <li>a multimedia appendix (ZIP) including images, audio files, video demonstrations, etc., in support of the paper; </li>
            <li>code & data (ZIP) to aid the reviewers in assessing the reproducibility of the paper’s claims; </li>
            <li> three previous submission documents (PDFs) that include the set of previous reviews, an author response to these reviews, and the version of the paper to which these reviews apply. </li>
        </ul>
        <p>The purpose of supplementary material is simply to assist reviewers; it will not be published if the paper is accepted for publication. However, authors of an accepted paper are free to include links to supplementary material or a full version of their paper on a personal homepage, a preprint server like arXiv, or a code repository like github. Authors must be very careful not to violate the double blind review requirements in any supplementary material to prevent their paper from being summarily rejected. </p>
        
        <h2>Technical Appendix</h2>
        <p>The length of main submissions is strictly limited, as already described. Authors may optionally submit a technical appendix (PDF) containing additional supporting information such as proofs of theorems that are stated in the main paper; additional information needed to reproduce experiments; further experimental results; figures and examples to illustrate technical claims; etc. The main submission may reference the supplementary material, but should be self contained. Reviewers will be instructed to make their acceptance evaluations based on the main submission, and will not be obliged to consult the supplementary material. If proofs or other supplementary matter are an important part of the contribution, their essential elements should be included in the main paper. </p>
        
        <h2>Multimedia Appendix</h2>
        <p>Some authors may also wish to provide additional material, such as images, videos, audios or other multimedia to supplement their paper. All such files should be combined into a single .zip file and uploaded to the easychair server. As always, such submissions should be properly anonymized; authors are urged to take particular care to ensure that any submitted video avoids images of the authors, identifiable voices, university or lab logos, recognizable campus scenes, etc. </p>

        <h2>Code & Data Appendix</h2>
        <p>Authors are encouraged to provide their software and all data needed to reproduce results in the paper as a third form of supplementary material. All files must be combined into a .zip file and uploaded to the CMT server. Reviewers may use this material to verify the claims made in the main paper and to assess the reproducibility of the work. If a dataset’s size exceeds the available max limit set by CMT, then authors are encouraged to upload a representative subset of their data.</p>

        <h2>Reproducibility Guidelines</h2>
        <p>Authors must complete a reproducibility checklist at the time of paper submission. These responses will become part of each paper submission and will be shared with reviewers. Information related to reproducing experimental results described in the submission may be included in the main paper or the Code and Data Appendix, as appropriate. Further technical details (proofs, descriptions of assumptions, algorithm pseudocode) may be included in the Technical Appendix. When appropriate, authors are encouraged to include detailed information about each reproducibility criterion as part of their Technical Appendix. Reviewers will be asked to assess the degree to which the results reported in a paper are reproducible, and this assessment will be weighed when making final decisions about each paper. </p>

        <h2>Ethics Policy</h2>
        <p>All CICAI2021 authors and reviewers are required to honor the CICAI2021 Publications Ethics and Malpractice Statement, as well as the CICAI2021 Code of Professional Conduct. </p>
        <p>Additionally, this year, we encourage authors to (optionally) write a statement about the potential ethical impact of their work, including its broad societal implications, both positive and negative. This statement may be written within and as part of the two extra pages designated for references, and will not be counted in the seven pages of technical content. Although writing a statement is optional, reviewers will be asked to assess every paper’s ethical implications; a paper may be rejected for ethical reasons if (1) an author is found to violate the CICAI2021 Publications Ethics and Malpractice Statement or the CICAI2021 Code of Professional Conduct; or (2) reviewers identify negative ethical concerns about a paper and it did not adequately address these concerns either in an ethics statement or in its main body. </p>
        
        <h2>Conference Registration and Attendance</h2>
        <p>For each submitted paper, at least one author is required to register for the conference and to present the paper. Details about attendance at the conference will be posted to the CICAI2021 web page. </p>

        <h2>Journal Track</h2>
        <p>A select set of top-rated papers may be nominated for fast track reviewing at participating journals. Nominated authors will be invited to submit extended versions of their CICAI2021 papers for fast-track consideration. </p>

    </div>
);

export default Instruction;