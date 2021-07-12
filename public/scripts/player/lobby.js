var help;

function getContext(id) { return document.getElementById(id); }

function defaultText()
{
	div = getContext("help_text");
	var html = "<h1>Primeira vez?</h1><p>Use os bot&otilde;es abaixo para aprender mais sobre o jogo</p>";
	div.innerHTML = html;
}
function about()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>About the Pit Market Game</h1>"
	html += "<p>The pit market game is a game used to demonstrate how the free market will eventually come to settle on a fair price for goods and services.</p>"
	html += "<p>The pit market game is traditionally played in a classroom where the players are free to move around<p>"
	html += "<p>TODO</p>";

	// Set the html
	div.innerHTML = html;
}
function rules()
{
	// Get Context
	div = getContext("help_text");

	// Crete html
	var html = "<h1>Regras</h1>";
	html += "<p>No in&iacute;cio de cada <b>rodada</b>, voc&ecirc; receber&aacute; uma <b>carta</b> com um valor. Voc&ecirc; tamb&eacute;m ser&aacute; informado se ser&aacute; um <b>Comprador</b> ou <b>Vendedor</b>.</p>";
	html += "<p>Se voc&ecirc; &eacute; um <b>Vendedor</b>, seu objetivo &eacute; vender seus \"produtos\" por um pre&ccedil;o superior ao valor do seu cart&atilde;o.</p>"
	html += "<p>Se voc&ecirc; &eacute; um <b>Comprador</b>, seu objetivo &eacute; comprar \"mercadorias\" por um pre&ccedil;o inferior ao valor do seu cart&atilde;o.</p>"
	html += "<p>A diferen&ccedil;a entre o valor do sua carta e o pre&ccedil;o pelo qual voc&ecirc; compra ou vende &eacute; o seu <b>lucro</b>.</p>"
	html += "<p>Para fazer um <b>acordo</b> com outro jogador, voc&ecirc; deve <b>publicar</b> uma <b>oferta</b> ou <b>aceitar</b>. Postar uma oferta pode ser feito inserindo uma oferta legal em seu dispositivo e pressionando ‘Enviar’. Voc&ecirc; tamb&eacute;m ver&aacute; ofertas de outros jogadores que aparecem em seu dispositivo.</p>"
	html += "<p>Se voc&ecirc; deseja aceitar uma dessas ofertas, basta clicar na oferta.</p>"

	// html += "<p>Every player will be assigned a card at random. This card will tell you whether you are buying or selling, and what your card is worth.</p>"
	// html += "<p><b>Buyers</b> are unable to buy a card for more than their card's value<br/>";
	// html += "<b>Sellers</b> are unable to sell a card for less than their card's value</p>";

	// html += "<p>Every round, you may make offers that other player's can see and accept. You will also be able to see offers made by other players which you can accept.</p>"
	// html += "<p>The goal is to make as much profit as possible, which is calculated as the difference between your card and the value at which you traded. The good deals will go quickly! It's up to you to determine what the best deals are.</p>"

	// html += "<p>These are all the rules for the base game, but the host can introduce more advanced rules later. Check out the special rules using the button below."
	// Set the html
	div.innerHTML = html;
}
function how()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>Como jogar o game</h1>"
	html += "TODO"
	// Set the html
	div.innerHTML = html;
}

function special()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>Regras Especiais</h1>"
	html += "<p>O anfitri&atilde;o do jogo pode introduzir regras especiais para uma rodada ou para um jogo inteiro. Quaisquer regras especiais ser&atilde;o exibidas na tela durante a rodada e na tela do lobby.<p>"
	
	// Tax
	html += "<h2>Imposto</h2>";
	html += "<p>O <b>imposto</b> ser&aacute; um custo fixo que o <emp>vendedor</emp> dever&aacute; pagar ao vender um carta com sucesso."
	html += " Por exemplo;</p><p style='text-indent :1em;'><p>" + "Se um cart&atilde;o de valor de $10 for vendido por $15 e houver atualmente um imposto de $2 em vigor, o vendedor ter&aacute; $5 de lucro antes dos impostos e, depois de pagar o imposto de $2, ter&aacute; um ganho l&iacute;quido de $3 para a rodada.</p>";
	html += "<p>Valor de venda - Valor da carta - Imposto = lucro<br />"
	html += "$ 15 - $ 10 - $ 2 = $ 3<p>"
	html += "<p>O imposto &eacute; um fen&ocirc;meno do mundo real que os governos imp&otilde;em sobre a venda de bens e servi&ccedil;os na vida cotidiana e esta regra ir&aacute; demonstrar como o imposto pode afetar o mercado livre."
	// Price ceiling/floor
	html += "<h2>Pre&ccedil;o teto ou piso</h2>";
	html += "<p>Quando h&aacute; um teto ou piso de pre&ccedil;o, h&aacute; um limite de quanto uma carta pode ser comprada ou vendida. Um pre&ccedil;o m&iacute;nimo define um valor m&iacute;nimo pelo qual um cart&atilde;o pode ser vendido e um pre&ccedil;o m&aacute;ximo reflete um valor m&aacute;ximo. Durante qualquer rodada em particular, haver&aacute; apenas <emp>uma</emp> das op&ccedil;&otilde;es e nunca ambas.<p>"
	html += "<p>O <b>piso</b> pode representar um custo m&iacute;nimo de produ&ccedil;&atilde;o de bens ou servi&ccedil;os para uma empresa."
	html += "<br />O <b>teto</b> pode representar um teto de pre&ccedil;o imposto ao vendedor por um governo.</p>"
	html += "<p>Observe que <b>&eacute; poss&iacute;vel</b> que voc&ecirc; n&atilde;o consiga mais fazer uma negocia&ccedil;&atilde;o quando esta regra estiver em vigor. No mundo real, as empresas podem ser for&ccedil;adas a sair de um mercado devido a v&aacute;rias pol&iacute;ticas ou custos introduzidos.<p>"

	// Set the html
	div.innerHTML = html;	
}
