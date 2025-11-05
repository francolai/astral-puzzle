import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('幽靈水母召喚石', 0.413));
firstRow.addPrize(new Prize('火焰狼召喚石', 0.413));
firstRow.addPrize(new Prize('松茸', 0.367));
firstRow.addPrize(new Prize('掉寶+1護符', 48.807));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.542));
secondRow.addPrize(new Prize('幽靈星寵進化石', 0.525));
secondRow.addPrize(new Prize('火焰進化石', 0.525));
secondRow.addPrize(new Prize('大閘蟹', 0.408));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('服飾‧殺星男爵傑森(男)(金)', 1));
thirdRow.addPrize(new Prize('手染服飾‧萬聖可愛女巫(女)(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒VI', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.494, 3));
fourthRow.addPrize(new Prize('服飾‧殺星男爵傑森(男)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染服飾‧萬聖可愛女巫(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('四階月能精魄禮盒', 0.506));
fourthRow.addPrize(new Prize('掉寶+5護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.653));
fifthRow.addPrize(new Prize('幽靈水母進化圖鑑', 0.236));
fifthRow.addPrize(new Prize('火焰狼進化圖鑑', 0.236));
fifthRow.addPrize(new Prize('神獸護身符自選箱', 0.165));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
