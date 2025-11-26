import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('英文老師的點名簿', 0.33));
firstRow.addPrize(new Prize('黑喵之杖', 0.381));
firstRow.addPrize(new Prize('誓約星羽‧冰雪‧諾諾', 0.367));
firstRow.addPrize(new Prize('掉寶+1護符', 48.922));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.801));
secondRow.addPrize(new Prize('數學老師的點名簿', 0.367));
secondRow.addPrize(new Prize('冰雪女王法杖', 0.424));
secondRow.addPrize(new Prize('誓約星羽‧暖心‧諾諾', 0.408));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.741));
thirdRow.addPrize(new Prize('五階星能精魄隨機禮盒', 0.259));
thirdRow.addPrize(new Prize('手染頭飾‧甜心女僕髮帶(金)', 1));
thirdRow.addPrize(new Prize('頭飾‧帥氣黑狐耳朵(金)', 1));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒III', 0.54));
fourthRow.addPrize(new Prize('手染頭飾‧甜心女僕髮帶(粉金)', 0.5));
fourthRow.addPrize(new Prize('頭飾‧帥氣黑狐耳朵(粉金)', 0.5));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('諾諾蒼誓召喚法陣自選包', 0.231));
fifthRow.addPrize(new Prize('精密電路-弱點檢測', 0.214));
fifthRow.addPrize(new Prize('亞倫的蒼誓聖劍', 0.206));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.662));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
