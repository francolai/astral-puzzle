import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('特殊小護身符收藏寶盒', 0.62));
firstRow.addPrize(new Prize('誓約星羽‧冰雪‧諾諾', 0.367));
firstRow.addPrize(new Prize('九星必過強化卷', 0.187, 3));
firstRow.addPrize(new Prize('掉寶+1護符', 48.826));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.892));
secondRow.addPrize(new Prize('誓約星羽‧暖心‧諾諾', 0.408));
secondRow.addPrize(new Prize('吉祥物護身符寶盒', 0.492));
secondRow.addPrize(new Prize('九星必過飾品強化卷', 0.208, 3));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.755));
thirdRow.addPrize(new Prize('武器‧喵喵宇宙星球(金)', 1));
thirdRow.addPrize(new Prize('武器‧喵喵電子星球(金)', 1));
thirdRow.addPrize(new Prize('九星必過戰利品強化卷', 0.245, 3));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('武器‧喵喵宇宙星球(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧喵喵電子星球(粉金)', 0.5));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒I', 0.54));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('冰雪‧蒼誓召喚法陣', 0.257));
fifthRow.addPrize(new Prize('暖心‧蒼誓召喚法陣', 0.257));
fifthRow.addPrize(new Prize('碧藍星的拖鞋', 0.206));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.593));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
