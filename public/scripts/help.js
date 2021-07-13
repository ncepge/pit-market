/*
 * HOW TO USE THIS FILE
 *
 * Insert
 <div class="helpBubble" onmouseover="drawHelp(help_id);" onmouseout="hideHelp();" unselectable="on">?</div>
 * into a relative division of on the page
 * change the help_id to the appropriate id
 *
 ** LIST OF IDs
 * 
 */	



/* Script for drawing help text division */
function drawHelp(id)
{
	document.getElementById("help_displayText").classList.remove("hidden");
	document.getElementById("help_displayText").innerHTML = helphtml(id);
	return;
}
function hideHelp()
{
	document.getElementById("help_displayText").classList.add("hidden");
	document.getElementById("help_displayText").innerHTML = "";
	return;
}



/* Helper functions to clean up HTML pages and 
 *	keep duplicate code together 
 */

function helphtml(id)
{
	var data = helpText(id);
	var html = "";

	html += "<h4>" + data[0] + "</h4>";
	html += "<p>"  + data[1] + "</p>";

	return html;
}
function helpText(id)
{
	var head = '';
	var p = '';
	/* Lilo and Switch help the user */
	switch(id) {
		case 'help_warning':
			head = "Por quê?";
			p = "Você pode não querer que seus alunos saibam as configurações que você usa para fazer o jogo. <br /> Aconselhamos que você mantenha a próxima tela oculta enquanto configura tudo.";
			break;
		case 'help_setupMean':
			head='Distribuição Média de Cartas';
			p=""
			break;
		case 'help_setupDomain':
			head = 'Amplitude de cada Baralho';
			p="O número de valores únicos de cartas em cada baralho";
			break;
		case 'help_setupLowerLimit':
			head='Limite mínimo da Carta';
			p="";
			break;
		case 'help_setupDeckGraph':
			head='Visualização de Baralhos';
			p="Isso representa os dois baralhos e os valores que eles assumirão. A 'escada' laranja representa o baralho do comprador, e a azul, o baralho do vendedor. Cada 'degrau' representa um valor que essas cartas podem assumir. Os baralhos se encontram no valor médio."
			break;
		case 'help_setupShape':
			head = 'Forma do gráfico';
			p="A proporção de cartas de vendedores acima da média e de cartas de compradores abaixo da média. Quanto maior o valor, mais negociações ocorrerão.";
			break;
		case 'help_cardBuyer':
			head = 'Sua Carta de jogador';
			p = 'Esta é a sua carta. Atualmente você é um comprador; você pode pagar até o maior número exibido.';
			break;
		case 'help_cardSeller':
			head = 'Sua Carta de jogador';
			p = 'Esta é a sua carta. Você é atualmente um vendedor; o maior número é o menor pelo qual você pode vender seu cartão.';
			break;
		case 'help_cardMisc':
			head = "Sua Carta de jogador";
			p = "Esta é a sua carta. Indica se você está vendendo ou comprando, bem como o limite de suas transações.";
			break;
		case 'help_postOffer':
			head = 'Poste uma oferta aqui!';
			p = 'Sua oferta aparecerá na lista de ofertas abaixo para que outras pessoas aceitem. Se aceito; você ganhará a diferença entre seu cartão e sua oferta.';
			break;
		case 'help_offerList':
			head = 'Lista de ofertas disponíveis';
			p = 'Esta é uma lista de ofertas que estão disponíveis para você aceitar. As ofertas para compradores serão exibidas à direita, enquanto as ofertas para vendedores serão exibidas à esquerda. Você só vê a oferta, não o valor do cartão. Você ganhará a diferença entre o sua carta e a oferta aceita.';
			break;
		case 'help_transactionList':
			head = 'Lista de transações anteriores';
			p = 'Esta é uma lista de transações que foram feitas com sucesso durante o jogo. Você não pode ver qual par fez a troca nem quanto eles ganharam.';
			break;
		case 'help_playerCount':
			head = 'Contador de jogador';
			p = 'Este é o número total de jogadores no jogo. Você é uma das pessoas listadas';
			break;
		case 'help_timer':
			head = 'Cronômetro';
			p = 'É quanto tempo resta. <em> Rápido! </em> A rodada está chegando ao fim!';
			break;
		case 'help_joinGame':
			head = 'Entrar no jogo';
			p = 'Digite o código da sala aqui e pressione entrar. Não tem um código de sala? Peça ao seu professor ou tutor o código para entrar no jogo. <br/> Você está tentando hospedar um jogo? Consulte a documentação externa.';
			break;
		case 'help_settingsTax':
			head = 'Configurações de impostos';
			p = 'Defina o imposto para a próxima rodada de jogo. O imposto <em> não </em> será redefinido entre as rodadas.';
			break;
		case 'help_settingsTime':
			head = "Tempo da Rodada";
			p = "Defina quanto tempo durará a próxima rodada de jogo. Você sempre pode terminar a rodada manualmente se estiver demorando muito";
			break;
		case 'help_settingsFloor':
			head = 'Configurações de piso e teto';
			p = 'Defina um preço máximo ou mínimo para todas as negociações na próxima rodada. Esta configuração <em> não </em> será redefinida entre as rodadas.';
			break;
		case 'help_settingsQR':
			head = "QR Code";
			p = "Faça com que seus alunos digitalizem isso com o leitor de código de barras do smartphone. Os alunos com Snapchat podem usar isso!";
			break;
		case 'help_settingsCode':
			head = "Código do jogo";
			p = "Este é o código do jogo! Faça com que seus alunos acessem a URL e digitem o código do jogo. Maiúsculas e minúsculas não importam.";
			break;
		case 'help_settingsTimeout':
			head = "Tempo por negociação";
			p = "Esta é a quantidade de tempo que uma negociação ficará ativa depois que um jogador a fizer. Durante esse tempo, o jogador não pode fazer uma nova oferta de troca.";
			break;
		case 'help_settingsEmail':
			head = "Enviar dados do jogo";
			p = "Digite um e-mail para enviar os dados do jogo para sua caixa de entrada.";
			break;
		case 'help_profit':
			head = 'Lucro';
			p = 'Isso é o quanto você ganhou neste jogo até agora. Parabéns pelos seus ganhos.';
			break;
		default:
			head = 'ID de ajuda inválido';
			p = 'Este texto de ajuda não foi implementado ou foi implementado incorretamente. Informe o host do jogo sobre esse problema e eles explicarão a resposta à sua pergunta';
			console.log('Attempted to draw help text with incorrect ID');
			break;
	}
	/* END OF SWITCH */
	return [head, p];
}