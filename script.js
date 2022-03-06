const btn = document.querySelector("#send")
var tile = document.querySelector('div#title')
var imgCar = document.querySelector('div#imgCar')
var preco = document.querySelector('div#preco')
var infoCar = document.querySelector('div#infoCar')

btn.addEventListener("click",function(e) {
  const modelo = document.querySelector('#input-search')
  const modeloValue = modelo.value;
  

  const modelos = [
    {id: 1, montadora: 'CHEVROLET', modelo:'ONIX', ano:'2021', motor:'1.0', imagem: '<img src="/img/onix.jpg">', info: 'Além da exclusiva tecnologia Wi-Fi Nativo, Carregador wireless e Easy Park, o Onix 2021 também conta com Projeção sem Fio, uma inovação que permite abandonar os cabos na hora de espelhar o seu smartphone à tela de 8” do MyLink de última geração.', valor: '76.730'},

    {id: 2, montadora: 'CHEVROLET', modelo:'CAMARO', ano: '2019', motor: '', imagem:'<img src="/img/camaro.webp">', info:'Mais do que resistir ao tempo, o Camaro ultrapassou os anos sem abrir mão da sua ferocidade e da sua personalidade única. Seu design ousado, performance inigualável e tecnologia aprimorada reafirmam o poder dessa lenda e evocam o piloto que há em você. Agora, além de uma performance sem igual, você também conta com Wi-Fi Nativo e MyLink de 8”.', valor:'328.990'},

    {id: 4, montadora: 'CHEVROLET', modelo:'CRUZE', ano:'2022', motor: '', imagem:'<img src="/img/cruze.webp">', info:'O Cruze combina um design esportivo e arrojado com tecnologia avançada. Experimente toda a potência do motor turbo, soluções inteligentes de segurança e a exclusiva tecnologia de Wi-Fi nativo. Tudo isso em um único sedan que vai te surpreender.', valor:'120.680'},

    {id: 5, montadora: 'FIAT', modelo:'MOBI', ano:'2021', motor: '', imagem:'<img src="/img/mobi.jpg">', info:'Um verdadeiro desbravador das ruas, o Fiat Mobi possui um desgin jovem pensado para encarar as ruas e avenidas com muita presença e estilo. O veículo possui uma qualidade superior de acabamento em todos os seus detalhes, desde os bancos até o seu painel.', valor:'38.990'},

    {id: 6, montadora: 'FIAT', modelo:'TORO', ano:'2022', motor: '', imagem:'<img src="/img/toro.jpg">', info:'De cara, você se encanta pelo novo capô. Depois, se apaixona pela nova grade superior, com o logo Fiat e o detalhe da Fiat Flag. Tudo desenhado de forma harmônica, equilibrando beleza e robustez. Não dá para negar: a frente da nova Fiat Toro ficou incrível.', valor:'137.990'},

    {id: 7, montadora: 'VOLKSWAGEN', modelo:'POLO', ano:'2022', motor: '', imagem:'<img src="/img/polo.webp">', info:'Em sua sexta geração, o Volkswagen Polo é o hatch da marca alemã destinado a concorrer com CHEVROLET Onix e Hyundai HB2o. O modelo é fabricado sobre a plataforma modular MQB-A e conta com cinco versões e quatro motorizações.', valor:'R$72.730'},

    {id: 8, montadora: 'FORD', modelo:'MUSTANG', ano:'2015', motor: '', imagem:'<img src="/img/mustang.jpg">', info:'Nascido para pistas, o Mustang Mach 1 carrega consigo o legado histórico de performance e esportividade junto a exclusividade de uma edição limitada.', valor:'287.450'},

    {id: 9, montadora: 'FORD', modelo:'KWID', ano:'2022', motor: '', imagem:'<img src="/img/kwid.jpg">', info:'Considerado um dos carros mais baratos do Brasil, com preço de partida de R$ 48.790, o Kwid ganha uma nova versão com aparência remodelada. O carro agora conta com conjunto óptico com luzes DRL, modificação das lanternas e contornos de LEDs. Os para-choques e calotas também ganharam atualizações perceptíveis em relação aos modelos anteriores.', valor:'47.690'},

    {id: 10, montadora: 'VOLKSWAGEN', modelo:'TIGUAN', ano:'2018', motor: '', imagem:'<img src="/img/tiguan.webp">', info:'O Tiguan 2018 chegou como a segunda geração do SUV de porte médio da Volkswagen. Fabricado no México, ele chegou em uma variante maior, de sete lugares, que substituiu a anterior, cujo projeto teve continuidade na Alemanha.', valor:'139.477'},
  
    {id: 11, montadora: 'PORSCHE', modelo:'PANAMERA', ano:'2021', motor: '', imagem:'<img src="/img/panamera.webp">', info:'O sedan e perua esportivos chegam à linha 2021 apenas com as versões híbridas 4, 4S e Turbo S, e também sem a carroceria Executive, com entre-eixos estendido.', valor:'619.000'},

    {id: 12, montadora: 'BMW', modelo:'I8', ano:'2015', motor: '', imagem:'<img src="/img/bmw-i8.webp">', info:'Lançado na Europa em 2014, o cupê superesportivo híbrido BMW i8 chegou ao Brasil em 2015. O modelo é comercializado em 2 versões: cupê e conversível. Ambas munidas por um motor a combustão e outro elétrico, que juntos entregam 374 cavalos e 42 kgfm de torque. O câmbio é automático e a tração 4x4.', valor:'649.950'},

    {id: 13, montadora: 'HONDA', modelo:'CIVIC', ano:'2022', motor: '', imagem:'<img src="/img/civic.jpg">', info:'O novo Honda Civic 2022 já foi anunciado e o lançamento deve acontecer nos próximos meses. O sedã é o novo modelo da marca e tem algumas modificações no design.', valor:'159.000'},
    
    {id: 14, montadora: 'MASERATI', modelo:'MC20', ano:'2021', motor: '', imagem:'<img src="/img/maserati-mc20.jpg">', info:'O carro Super Sport da Maserati que rompe as barreiras do tempo. Acelere com audácia, rumo a um futuro admirável.', valor:'1.000.000'},

    {id: 15, montadora: 'VOLKSWAGEN', modelo:'GOLF', ano:'2021', motor: '2.0 TSI', imagem:'<img src="/img/golf.jpg">', info:'A oitava geração do hatch mais vendido da história chega à conclusão com o Volkswagen Golf R 2021, que desembarca com força abaixo do esperado, entregando em seu motor EA888 2.0 TSI em torno de 319 cavalos.', valor:'272.000'},

    {id: 16, montadora: '', modelo:'', ano:'', motor: '', imagem:'<img src="/img/">', info:'', valor:''},
  ];

  const modeloFilter = modelos.filter(m => m.modelo == `${modeloValue}`);  
  // console.log(modeloFilter.map(a => a.montadora + " " + a.modelo + " " + a.ano + " " + a.motor));
  
  tile.innerHTML = modeloFilter.map(a => a.montadora + " " + a.modelo + " " + a.motor + " " + a.ano);
  imgCar.innerHTML = modeloFilter.map(a => a.imagem);
  preco.innerHTML = modeloFilter.map(a => "A partir de " + "R$" + a.valor + ",00");
  infoCar.innerHTML = modeloFilter.map(a => a.info);


});
// Função transformar todas as letras do input em maiusculas
function handleInput(e) {
  var ss = e.target.selectionStart;
  var se = e.target.selectionEnd;
  e.target.value = e.target.value.toUpperCase();
  e.target.selectionStart = ss;
  e.target.selectionEnd = se;
}