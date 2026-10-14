/**
 * Image assets: replace any URL with your own photo or video thumbnail.
 * Every <img> in the project reads from here.
 */
export interface Project {
  id: number;
  title: string;
  url: string;
  category: string;
  stats: string;
}

export interface Reel {
  id: number;
  brand: string;
  title: string;
  url: string;
  views: string;
  likes: string;
  duration: string;
}

export const IMAGES: {
  coverAvatar: string;
  aboutPhoto: string;
  eduGraduation: string;
  eduClass20: string;
  eduYard: string;
  skillsCamera: string;
  projects: Project[];
  socialsMockup1: string;
  socialsMockup2: string;
  socialsMockup3: string;
  brandReels: Reel[];
  laptopConcept: string;
} = {
  // Slide 1 - Cover Portrait
  coverAvatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDqU_M0VBwSGhKsuVc9uey1HkIdF1fCehIjiKomBt9g_DvhEpPB2IJ7a2l5iQ3ys-M7fQJoYp3wtlwcsLT-LuWYdk3HYsBtRLOw2WK88K2oq2Ie265UL14mTrF-3P186IjtCvwRPh6YNuJIIpczJeoEHWHZKG5FPW6mwW6UV4YJ16JRHVv0v8KbXWPm8ced12Kset4xY4qBn05aDlOav8lijsAgHRR3WDAgGeoz42DxycLCVCAUwddv',
  // Slide 2 - About Portrait
  aboutPhoto:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4lQs1Ao26kO-P7c8tefM7V-Nse7CviQHefZgnAPa1W1jRbYzSQaJqoZ4p65j1koJJ1Uylln8iYzIGYAgamz0bd2UZ_npboPGXscv4j3FcrzzK7eWdG796LFJURyReF9So0IBJKg5-5U1G4qOiHDi4WG19UDj8O4EXJV95KE5FCBj0KFKtZjpVLAyLpWB6lZ5pYMlQEKJE75pGQLuMfshQjzyYuzAv0O6CokYasVQhKP5f0UaPgTLK',
  // Slide 3 - Education Polaroids
  eduGraduation:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAIf8Ji4xwHs9vSw2_Qie1NvNl-B130TG_DHKzdQNQMPGPfEFdt0VpwqlOrI2xnyDohlYKIC7DYLXug26LgbrWi7l6_8ABwQGMgN_KNizaR-boivxRPUwCklsLcLqG82IxwvSctB69lxTk8wFD45OOvHajPyfKceHJlh6Xxegk1kB4XuHF9AJnxVDDFtUzG2BsAH6E3a-zTCi71Pb74k43EBYEFEY3cYger0_OUdeFr85IFn408ovu2',
  eduClass20:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuARyqiLdmTPrcxsYPNh_XOxtpcf0GnTDGreYupWiZMAYVabjYU3BS5Hh2jVaXuZgDj5yEGD51og3NpRIdltJ-0BjdQzvJukVZiWHbqmGycbeeMJQhbCtxDlA_6zHsQj0ucod_vHuCbows6UNM747ZUmHCXKW-57pM9HGx812IfWlyYDlHKEfu-1U9vREPJ8v_xBQCBTpy3bFS-FlNkrySCgCIif8aFMMjhHj7FBbcrso_-S6BpxBUMb',
  eduYard:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAIXRN2fpiM35y8iGKK8stV4JwOgMNpEYoXakFPEyRVr8KZK2eHyDBj40knUles-mAbW5ldiZKmEHw94aCC3D6lL5hVD8nIZDzw7wY3L7a_eIBxKi9VcdRSydBjYyGSifW86T4MFOcSLaDEipIZXEaVkGWdrN844EhKWeTr-qpIRjTEtyKkmJZeOiij_UcApox7P9BBU8MitsgJt_tIxTKnbVa9Hu0OGD_0av_U6STRqEF69NKYaPxT',
  // Slide 4 - Camera Portrait
  skillsCamera:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYDchhcBCAfPFEeiT-4n-wUaeYzE_WuGo00zRpfZv6t-sEdEfqS0uJWpB1sKSiN3nYS2wYIGC-QT0q2k1pfgi6nSLvg1oGHagP7RMS1LJY6qBhzpQPyehei_FMe2Majktb5mva9YjvPRAFMqqKxUwSO2NjaTc712LTjIe4VNvcGAXpEMCEQ6oJubmA-8CNfuWCfj4xPmJkUmhv_dmUhmw6R8EMLeWdzYf-D8h6l-uk4Zfj1ibfgENq',
  // Slide 5 - 3x3 Project Grid
  projects: [
    {
      id: 1,
      title: 'Velora Glow Campaign',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvoeRGYqRr1M6jho5V6jcT-PwRpRzDJkJOR6WHu562R-lMdlYMklq9LLl_BJKsr-tCifAi0G5a0d_SZTAzCgRCKX_r4KgPnGqHR4M0Wayh4HM8JCc0WF2XV-qYx_oYctJ7APnQ-nVvPoepujdS9s_RwrOMOQTA2RCam3xj4cmorpBLLHEOucNcKZjGBxCAAyeA2knJoU4WUBWjfYmN7Yw8ELSMrBvTP4gKLjAmSr83Z_wotJoe4Apr',
      category: 'Product Spotlight',
      stats: '840K Views · 45K Saves',
    },
    {
      id: 2,
      title: 'Skincare Routine Diary',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUalS-lmgibDF7WZJ3Nz1HbcpNQHM6weS5j0EdfXLBoEXl-2Zw1WLKQsNi7Cwhex77Dfr5wncesuRxGgQp2jKHr7I_ZnnqmnG0ld9mIL0YHScSwKpdYw_yz3eusJ3FJ2kv0WLQ8T9XChXasPAbYVJfzo3kcQL3wX5glRVf1BMYiz7GdqmWFJnqWTz28l6gl97sosCFUply15T-WiWY4nEWpPkUnSst5f_90ALHeF7sxfiO_Asoo9BD',
      category: 'Tutorial Video',
      stats: '1.2M Views · 89K Likes',
    },
    {
      id: 3,
      title: 'Golden Hour Aesthetic',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMz8UI03-3oMD0fwB4wApCxqFO88QR1jtXQbK8atXH8U4F9hI0WlmaEAQH_vyvruaZlX8QNtKDQBMKUz7C7sj-DjrsR3qaRoyEp8hFnROU5VzTBEqFPL5vdUY2hkjqpoffwiYZwnJ5guRaIileLaad5dSAHIrxYeDEl7P-Et5iIi3bRUcs-JVjVEyXQQ1YYGZFdxO2TyGONI-1NcW2fO7KGVtRlqWZkCJWsa5kt12Kp-IHVMgjsFKG',
      category: 'Editorial Stills',
      stats: '620K Reach · 7.4% ER',
    },
    {
      id: 4,
      title: 'Texture & Formula Macro',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS8_Q5z9gFz09zOyqiDG3hCPwnPJJ6cdY5r5yWzSdDTqetnjJwXJ1dTF7kP63HGsleAOKEy1W1bCwiO1vNFD909XWpXjcbbP7B-RLg1JncrKYfZznbzcUBCEKevM3n4UgvyZ04saPywmZs0psNqdOjCnZVUkZncbQJV82cIkG0l1SghPgiOBXdqr5kwu3_1udUeDPEtyLWIPLlZDay89F-B6G4nLP9SasChVSNwmumaonQCDJVDhAG',
      category: 'Macro Detail',
      stats: '950K Views · 32K Shares',
    },
    {
      id: 5,
      title: 'Summer Hydration Launch',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu8CPkFHHWFlzBVq0umNUwgto1IoGIN3g0KOlXkMAGoOgmkh2I92vy-pblpukk_oDHz989i8uWZPAcsGi4ytH5DlSt-n372CL3a5xv9PbX7DM3xgHwL8ZcMEU66wm9NTUZqvOfGsboyb9j0uKToomMqlCikpJ-zfLt7vthRIlC30aFePIUqXTKfAglMGCg2PPZj359Wf7M7yMUhrCworc7n0cKNGNWArfYtrB6JD2tGNSKKGIuvGTe',
      category: 'Brand Story',
      stats: '1.8M Views · 110K Likes',
    },
    {
      id: 6,
      title: 'Sustainable Packaging Focus',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA27zu4DadG6ivcXX5WNWHxvjjqT1-ekqSubsFZ8vGcbvk4kHFTA77HBfVdA6JXcI_RfFr0fUc_0pEQZyYeJbTsXk7k3ahNa2zc6mX5XLaFdk7ugqiz0SQL0CCz7L-S8KMZT5WDxuDSlLfnSbJDfU9TlcCE3i97ErcgUiCfb54OoqkAwnfP9irTDkYD9VW8SV3wN1865K5QMDj6B3KwBF4PCoQ8DmiLGqVHtU76CD5n_4pTujBd6bEc',
      category: 'Education Reel',
      stats: '490K Views · 18K Saves',
    },
    {
      id: 7,
      title: 'Clean Minimalist Flatlay',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpujjqw0wBjlJO7TjrI6IJs4ny27cFwQaAyrA6GFWlyvt0k63lGdBUfJtLO9-shSGWsusU2Re8k1FtvpJIEAHkrKTxnExWEAmAPTOztatdSDhXvV4pkJ8tC_pM4KmFqH-XhYKg0Prf4wHswbwAx8CPGIyyMABCbKF6PuEfPKZ_zCj8ISjYB_eMT1TIIqoTZ_4wqo-CAwTa9Xe2yvZkukrVwrJWUh6LhK6DWl2cP30BPPYi_aVGldkj',
      category: 'Flatlay Art',
      stats: '710K Reach · 6.9% ER',
    },
    {
      id: 8,
      title: 'Night Repair Serum Teaser',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBimgpE0mObfCyCHa4qlXGdybro7cytL9_mN38-5EYB2XmGnecZ1Be-pl1SpnHjGT1STRwd8qFuOS2GmUokapHnU1LUn-mH65GNnukkcgHWdhwXP1eM_IItAs0JETCesNlHpYbWtjoBE_TiAMEaGnY8zCT53CGsb0WUk-FeoXU_cHePFW5SmaK-mJTtobY16ynucfexYjRBGNRqGF3_Z2nXWUy4gsUAh2sWEjEkLTHFCGJ_-5Fkg1ZH',
      category: 'Teaser Short',
      stats: '1.4M Views · 68K Saves',
    },
    {
      id: 9,
      title: 'Full Brand Visual Ecosystem',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLnCizH1cbWO4cN0GQ9dOIsjKVD2rTugyuA6BhHhq7XyZ1Hyl316Pu_-rz_rRz7tfFs13jAXJC-Vlmk2mVVIrF3l_ySfvX94mklYXacVKurZQgu7f_DICZGCMc5Tf1HFMKF1NPwl1oixI2FXb75DcvrZBBEOZ07QzX59b_kiuL8mFuvk-ys_v4UuxGgIsUrXR0cnhuI_3A-p7oi2bu0uBjMHeK-23b9_Z0ILOWbH1inpTcqdpmR64Z',
      category: 'Case Wrap',
      stats: '5.2M Total Campaign Reach',
    },
  ],
  // Slide 6 - Social Screen Mockups
  socialsMockup1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDrMKDPAdiZKsv4WJ55XBjFGCBPKIlybjr4SrXXRFglBbpcowxChstwx8M-rC487fknfmK_879Bq62igqpFAeU79E2UOn0jkKdhbmLXKu8rdRQfgdNNPvOfCpWi_BLeREbV9f_oBesBUZJZlNOTXhTrjSi2NQB3rjEmVkJ1aV42eaqa0brkbo_2l_-25bBUw_ExeJmkwTuw-WWe_xfi6y8oNuzEqwVn91-xhfRQYo5hpg01h2-J1k-B',
  socialsMockup2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2vA9nn8jbgUxJyDwN6L8KeH3D13D7rFf_e5eOTyGqFPDvFyk3y4T3FqwsvsmVZQkuxfN97TmKIHwyhJo2vcJCATCBn1GBxKxXC4bvx9X1tn8Sm_w0p01dNuk5hKScEIrGMxhIXlS4wzTJDLKdcUUm--2RrjXmYzETa6-cpuyTlww0OzDpXT2KO3PzqWTIn6NOkxRAUqBSNdMFOHXIjo97QF_ZOUPuKYRJwi6vcfsu62H0ChD6lFG',
  socialsMockup3:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB5fkFjllESttrB3iM0trnFxcuwQs_pR5kcphtkCIyOC_p6ij3qh-UMt9WkIov_7KDo4jiqd9yh2GAXUnYGSFw3UROEnTFYyDrCtOWeJgy9vgy5D979mb7lyhzDyjup4Ioel-lKHCv5Mgg1eJFAZaakWu7P_wk9cl61pkT3AU_aYqOXaMpvnAdM8vFwHEhjF7cPrsgCgLVcaHGjaFHV7rLCTu2yehhxbLDqpahtdH2ph5S44LMk3og5',
  // Slide 7 - Brand Reels
  brandReels: [
    {
      id: 1,
      brand: 'florica',
      title: 'Botanical Radiance Routine',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkQfeEr23YZxdZQ1398SW0vv4DtrskN6KomQ9J_a5Ygmrd-eR8QEcRx7TaL7BF7uxAhsYMyFcz3dMfWy_tAXHTiifMc6c15khcdLpRzVU2TMGt7R-Ei_0tfGD8LaPwYhC4Gnak-An_alw6UAG45jh7wwOePtuFNg1EIeOYkU87hzik-KrbcUJoS46sJZJZ2g7uKwL437zq_iIg5ofEo-ErmVKmp6qQ4jNPzNlpg42bAVLQcAuCSK2k',
      views: '1.2M',
      likes: '94K',
      duration: '0:32',
    },
    {
      id: 2,
      brand: 'maslostudio',
      title: 'Studio Creative Vlog & Behind The Lens',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWhwJO9Xq3FmkjTjSSwLEoBuW9HOU1LZXcFJFMTU2FXxn6Jl6fyTyW5BKAtdHig9H6mKqez89QDf-9MCR0VCXE5gjpLSJ7Lc6_FlrShSqHtRlnF-WiHLXZPYKYrnGIZd2y71cSjyVaB4C2eyi82MnRbBAnNzCSAW9hG_rbM6wWRyjIJFaKIY0DuaxbrT9sj0EZaTFZqHGFfpd5GREsHB56R_ZLlHI99rQPfIKkamKdGvK9M5LS93Zb',
      views: '880K',
      likes: '71K',
      duration: '0:45',
    },
    {
      id: 3,
      brand: 'unearth',
      title: 'Sustainable Living & Travel Essentials',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9sV4k1Gy7ao4M0_gF5ICuQ3lcJ-Km2llvUVYs0GWeK1UiNRJFallUPsnO4KcoW4vSqVViMEJR_X8BYgDwGgxXiI22lhRIyhPlMtS4IuqfxZNgAtRI1S1k57WhLbBRLv7Armt0WepKZBGcff80liWi33LBUWZpOBIjC1QCvTHHZJHbJIFcuMnS9v0kxo7XMcjGo5rbQE87eeKW64-4ke5IoSt_Y7Z3BzNfdz1Xgq6y__EoCPzKejru',
      views: '2.1M',
      likes: '160K',
      duration: '0:50',
    },
    {
      id: 4,
      brand: 'fuse',
      title: 'Creative Tech & Minimal Desk Setup',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArrsFyrhbY_3I6BKLXXxxGjtHfA2by5k9-MMqmcGhs3_2GXtIyj3YvW87ny5I12TsW0R0lX8PZnFNsjydZ1iYVyCOX680Dv5ali4kX8Jm4jK7385TOohK-TeE2KehyYgpBDp5ohID1n1-JJjRPnStE8uExGJHqpksogsm-VNKvoYdGo5Z9FVjnl43GGv3X1wKTyycAfupAt0IoHSK1DBkiHVYXU5jlFKwtGqWyR3wxWW3WTN5oo2fy',
      views: '1.5M',
      likes: '112K',
      duration: '0:28',
    },
    {
      id: 5,
      brand: 'lumi',
      title: 'Morning Glow & Ritual Breakdown',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAcwmHZbsbjwAs1P_tEIb7ySL5A5wE9lrbeyA1uUIYq3CxoJSPO1xDuj-NfLkK8pXxUjydw973A_71aZU9JnbRmYxX4N51bdRlFj2MEkZuCeEYhsSB0dQu8fbD6RnQX5aKZL3zKxwh2KSkz8PWbxNjsk_-HY9UHwDdBj8sf8s_IIPl9qyu2kRrapFxGS5nInNylDEWv084z-cMjS4N7j7iiLmbwuVa-LluRxygc_DThQyhSCpGV5iw',
      views: '970K',
      likes: '83K',
      duration: '0:39',
    },
  ],
  // Slide 9 - Laptop Concept Mockup
  laptopConcept:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZf6CUvGI9HqOSPMkGp3DVG4L22Yk7iEWvVxBkgT__cE0zzRhU06ORB8c66wkuIcq7wKBCDr_WpbNvgz8rSr1_OucdDvn7TdLcucvAwtTbDENIXki7WdBRoxQNgBdEreErNUsiN0UvZ8p_RRV-BAG8LJ2saNSYVFo2Z7_ww9zMGGo4339b0-eGpMmu15a6vpMMHKy3OFDfhfuMj89jHxz9TQWdLS9fVot_cf6SADsKsfwa1FINLDb',
};
