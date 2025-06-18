const getDisplayTitle = (item) => {
    switch (item.id) {
      case 1: return "SACK Laptop Backpack";
      case 2: return "Men Casual T-Shirt";
      case 5: return "Women's Bracelet";
      case 6: return "Silver Petite Ring";
      case 8: return "Pierced Owl Rose Gold Studs";
      case 15: return "Women's Ski Coat";
      case 16: return "Hooded Jacket";
      case 17: return "Raincoat for Women";
      case 18: return "Women's Boat Neck Tee";
      case 19: return "Opna Short Sleeve T-Shirt";
      case 20: return "DANV Short Sleeve Tee";
      default: return item.title;
    }
  };
  
  export default getDisplayTitle;
  