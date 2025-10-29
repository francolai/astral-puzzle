import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('白飯', 0.827));
firstRow.addPrize(new Prize('粗粒小麥粉', 0.827));
firstRow.addPrize(new Prize('奶油', 0.827));
firstRow.addPrize(new Prize('掉寶+1護符', 47.519));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.988));
secondRow.addPrize(new Prize('松茸', 0.408));
secondRow.addPrize(new Prize('大閘蟹', 0.408));
secondRow.addPrize(new Prize('食譜‧蟹肉奶香義大利麵', 0.196));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('手染服飾‧元氣樂曲(男)(金)', 1));
thirdRow.addPrize(new Prize('手染服飾‧元氣樂曲(女)(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒VIII', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.325, 3));
fourthRow.addPrize(new Prize('手染服飾‧元氣樂曲(男)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染服飾‧元氣樂曲(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('武功秘笈自選寶盒', 0.675));
fourthRow.addPrize(new Prize('掉寶+5護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.051));
fifthRow.addPrize(new Prize('食譜‧奶油蟹肉燉飯', 0.413));
fifthRow.addPrize(new Prize('食譜‧松茸奶香寬扁麵', 0.413));
fifthRow.addPrize(new Prize('食譜‧松茸奶油炒飯', 0.413));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
