import React from 'react';
import './PrimeBanner.css';

const images= [
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e1600b32cdf1085affd41b1cc2bf0bc9247fe8e89124e444c64d96586dd69480._RI_V_TTW_QL40_AC_SL792_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fccea6fc96c89fb1a7e3d4dc4d1c95541df10fe4a87f8f330eb34a0f495ec283._RI_V_TTW_QL40_AC_SL792_.jpg",
    "https://m.media-amazon.com/images/S/atv-aps-images/encoded/GULABO/IN/hi_IN/COVER_ART/BOTH._RI_V0_TTW_QL40_AC_SL792_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d2933bf5b62194e73658b1a85d7b8f5d0eb4c977b118f88002dca55199fc2254._RI_V_TTW_QL40_AC_SL792_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/520649644d85e41ed88ae7b13eaa5cb0cf1e081d6dc6f9ed88ad0e9af95d98a3._RI_V_TTW_QL40_AC_SL792_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/dfb788acd0dcbd94cdfd66b3553ae94fc1dcbede3fe2d63f7dc6d26b3197a118._RI_V_TTW_QL40_AC_SL792_.jpg",
    "https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/37b5/67a5/94ff/46e6-8040-6f087f8ffc0f/05d8bd52-ded7-46c7-8129-1fb88302a6e1_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    "https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/93ad/7787/d3c6/4c16-a9d2-47a05ef8091d/fb37b68d-cbb5-4c88-9a14-c628f03fe7c5_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    "https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/1ff5/c037/ee77/4642-a2ef-d18e3a96a80c/89cb3cbb-fcaf-4351-be16-74c361394fae_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    "https://s3-bom-ww.cf.trailer.row.aiv-cdn.net/f635/1f68/42a4/4eff-a67e-8351d54d98d5/98c74c7f-d0e2-4ead-b3b8-e0fcda544f2a_video_900_audio_aaclc_128.mp4?Expires=1630901711&Signature=DjBPQ4h4desM5vtXBEcFKO0yCU9paPG4FFTbtQhPu0Tl-fgwr2uSxKyJm7rjVakE5QUbpTy~J0dHQ~gacNjgoCJn3C15KPpKGvAKifVIDExAyJy38LoLby-1fM61ESq5z7l6ArsB3zgogZPmtubyDNDMJoG7Qk5OTOLVknRMZq0X4C7jBwT4qRyYCejzKR-s4mE1IWwl7QL12WHeTwnXwls7m5SmOxyLMrWm7farfIvRh-WwwFiK-ou2aVKNu6kSSByEV8J9G8AjEhdQWoCFQHpA0aLGU0T~oslUtRJM1bUIqLWzcYZLAMY5GMM4J87RrgQBSypCVStvVtx-zfbxHQ__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA",
    "https://s3-bom-ww.cf.trailer.row.aiv-cdn.net/1a8e/441c/cf9b/406e-af5e-1f1063050601/4a0cd0ed-e962-415a-8699-5e30c75d214d_video_900_audio_aaclc_128.mp4?Expires=1630901713&Signature=oHkOJQdrCs-8hMwzcG6DlZKCM1QwCvkN1f720wQaWDrdQEmzZAqKYqcquJbuEaA6h3nnPlS1VKOUUWPjuE-y-FPt598z1Y7GgD0UtZ8cpvVUv62JoR~mOr3iCuHYQzJIU44~3GFzo2xlY-O~i0tig6xys7xcMK9hNyLmH7GuYtGWnTNQUNPZsLoRFh83Wi0jDwrybNyhc0pPBhCWDM0Cj4nBazzmaEYMwVkfJt3vJOxCeSx~QNEwNBAA06GvnDPEga6-TfEFpllKi-LhffCGYHyK6rwSocYnzjvsuXVCr8apVTt4vEynwxMcWr~AVyMwvkUL8b~axzktS03Q59dLEA__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
    ];  

function PrimeBanner() {

    const randomNumber = Math.floor(Math.random() * images.length);
    
    return (
        <div className = 'primebanner'>
            <div className = 'primebanner_image'>
                <div className = "banner_fadetop"></div>
                <div className = "banner_fadeBottom"></div>
                <div className = 'primebanner_title'>
                    <p className = 'primebanner_title1'>Prime Video: Recommended for you</p>
                    <p className = 'primebanner_title2'>Start watching on Prime Video</p>
                </div>
                <img className = 'primebanner_image1' src = {images[randomNumber]} />
            </div>
        </div>
    )
}

export default PrimeBanner;
