export type Publication = {
  year: number;
  title: string;
  authors?: string;
  venue?: string;
  doi?: string;
  pdf?: string;
  code?: string;
  bibtex?: string;
  source?: string;
};

export const publications: Publication[] = [
  {
    year: 2026,
    title: "Global glacier albedo changes in the 21st century revealed by MODIS and CMIP6 models",
    authors:
      "Yao Xiao, Chang-Qing Ke, Suhui Wu, Xiaoyi Shen, Yu Cai, Yuyue Xu, Haili Li, Vahid Nourani, Drolma Lhakpa",
    venue: "International Journal of Digital Earth, 19(1), 2681373, 2026",
    doi: "https://doi.org/10.1080/17538947.2026.2681373",
    source:
      "https://www.researchgate.net/publication/405569244_Global_glacier_albedo_changes_in_the_21st_century_revealed_by_MODIS_and_CMIP6_models",
  },
  {
    year: 2026,
    title: "Strengthening influence of atmospheric rivers on global snow depth dynamics",
    authors:
      "Haili Li, Chang-Qing Ke, Xiaoyi Shen, Suhui Wu, Qinghui Zhu, Yu Cai, Yao Xiao, Deliang Chen, Xixi Lu, Zheng Duan, Liyin He, Yuyue Xu",
    venue: "Nature Communications, 2026",
    doi: "https://doi.org/10.1038/s41467-026-71969-w",
    source:
      "https://www.researchgate.net/publication/404083766_Strengthening_influence_of_atmospheric_rivers_on_global_snow_depth_dynamics",
  },
  {
    year: 2026,
    title:
      "Monitoring the 2024 Abrupt Flood Event in East Dongting Lake via Deep Learning and Multisource Remote Sensing Data",
    authors:
      "Yao Xiao, Dianwei Shao, Suhui Wu, Yu Cai, Haili Li, Lichao Zhuang, Yuyue Xu, Yubin Fan, Chang-Qing Ke",
    venue:
      "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, PP(99), 1-18, 2026",
    doi: "https://doi.org/10.1109/JSTARS.2026.3653452",
    source:
      "https://www.researchgate.net/publication/399713220_Monitoring_the_2024_abrupt_flood_event_in_East_Dongting_Lake_via_deep_learning_and_multisource_remote_sensing_data",
  },
  {
    year: 2025,
    title: "A dataset of polar sea ice concentration retrieved from the HY-2B Radiometer (2019-2021)",
    authors: "Tao Zeng, Lijian Shi, Suhui Wu, Lizong Wu, Yawei Li",
    venue: "China Scientific Data, 10(3), 1-13, 2025",
    doi: "https://doi.org/10.11922/11-6035.noda.2024.0161.zh",
    source:
      "https://www.researchgate.net/publication/395972977_A_dataset_of_polar_sea_ice_concentration_retrieved_from_the_HY-2B_Radiometer_2019-2021",
  },
  {
    year: 2025,
    title: "Evaluation of SWOT's performance for river water level retrieval in the Yangtze River Basin",
    authors: "Zhiyue He, Yu Cai, Suhui Wu, Yao Xiao, Haili Li, Chang-Qing Ke",
    venue: "International Journal of Remote Sensing, 46(12), 4736-4763, 2025",
    doi: "https://doi.org/10.1080/01431161.2025.2512162",
    source:
      "https://www.researchgate.net/publication/393987411_Evaluation_of_SWOT%27s_performance_for_river_water_level_retrieval_in_the_Yangtze_River_Basin",
  },
  {
    year: 2025,
    title: "SWOT mission enables high-precision and wide-coverage lake water levels monitoring on the Tibetan Plateau",
    authors: "Suhui Wu, Yu Cai, Chang-Qing Ke, Yao Xiao, Haili Li, Zhiyue He, Zheng Duan",
    venue: "Journal of Hydrology: Regional Studies, 59, 102357, 2025",
    doi: "https://doi.org/10.1016/j.ejrh.2025.102357",
    source:
      "https://www.researchgate.net/publication/390406323_SWOT_mission_enables_high-precision_and_wide-coverage_lake_water_levels_monitoring_on_the_Tibetan_Plateau",
  },
  {
    year: 2024,
    title: "Retrieval of sea ice drift in the Fram Strait based on data from Chinese satellite HaiYang (HY-1D)",
    authors: "Dunwang Lu, Jianqiang Liu, Lijian Shi, Tao Zeng, Bin Cheng, Suhui Wu, Manman Wang",
    venue: "The Cryosphere, 18, 1419-1441, 2024",
    doi: "https://doi.org/10.5194/tc-18-1419-2024",
    source:
      "https://www.researchgate.net/publication/379384214_Retrieval_of_sea_ice_drift_in_the_Fram_Strait_based_on_data_from_Chinese_satellite_HaiYang_HY-1D",
  },
  {
    year: 2023,
    title: "Retrieval of sea ice drift in the Fram Strait based on data from Chinese satellite HaiYang (HY1-D)",
    authors: "Dunwang Lu, Jianqiang Liu, Lijian Shi, Tao Zeng, Bin Cheng, Suhui Wu, Manman Wang",
    venue: "Preprint, 2023",
    source:
      "https://www.researchgate.net/profile/Suhui-Wu-2",
  },
  {
    year: 2023,
    title: "Feasibility of retrieving Arctic sea ice thickness from the Chinese HY-2B Ku-band radar altimeter",
    authors: "Zhaoqing Dong, Lijian Shi, Mingsen Lin, Yongjun Jia, Tao Zeng, Suhui Wu",
    venue: "The Cryosphere, 17, 1389-1410, 2023",
    doi: "https://doi.org/10.5194/tc-17-1389-2023",
    source:
      "https://www.researchgate.net/publication/369691600_Feasibility_of_retrieving_Arctic_sea_ice_thickness_from_the_Chinese_HY-2B_Ku-band_radar_altimeter",
  },
  {
    year: 2023,
    title: "Daily Sea Ice Concentration Product over Polar Regions Based on Brightness Temperature Data from the HY-2B SMR Sensor",
    authors: "Suhui Wu, Lijian Shi, Bin Zou, Tao Zeng, Zhaoqing Dong, Dunwang Lu",
    venue: "Remote Sensing, 15(6), 1692, 2023",
    doi: "https://doi.org/10.3390/rs15061692",
    source: "https://www.mdpi.com/2072-4292/15/6/1692",
  },
  {
    year: 2023,
    title: "Arctic sea ice concentration retrieval study of FY-3/MWRI based on the bootstrap algorithm",
    authors: "Suhui Wu, Bin Zou, Lijian Shi, Tao Zeng, Xi Zhang, Dunwang Lu",
    venue: "National Remote Sensing Bulletin, 27(4), 973-985, 2023",
    doi: "https://doi.org/10.11834/jrs.20222336",
    source:
      "https://www.researchgate.net/publication/371923342_Arctic_sea_ice_concentration_retrieval_study_of_FY-3MWRI_based_on_the_bootstrap_algorithm",
  },
  {
    year: 2022,
    title: "Assessment of Arctic Sea Ice Thickness Retrieval Ability of the Chinese HY-2B Radar Altimeter",
    authors: "Zhaoqing Dong, Lijian Shi, Mingsen Lin, Tao Zeng, Suhui Wu",
    venue: "EGUsphere preprint, 2022",
    doi: "https://doi.org/10.5194/egusphere-2022-870",
    source:
      "https://www.researchgate.net/publication/365026633_Assessment_of_Arctic_Sea_Ice_Thickness_Retrieval_Ability_of_the_Chinese_HY-2B_Radar_Altimeter",
  },
];

export const publicationPlaceholder =
  "Selected publications will be updated soon.";
