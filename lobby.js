var help;

function getContext(id) { return document.getElementById(id); }

function defaultText()
{
	div = getContext("help_text");
	var html = "<h1>First Time?</h1><p>Use os bot&otilde;es abaixo para aprender mais sobre o jogo</p>";
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
	var html = `
<h1>Regras</h1>
<p>No in&iacute;cio de cada rodada, voc&ecirc; receber&aacute; uma carta com um valor.\
<br>
Voc&ecirc; tamb&eacute;m ser&aacute; informado se ser&aacute; um Comprador ou Vendedor. \
<br>
Se voc&ecirc; &eacute; um Vendedor, seu objetivo &eacute; vender seus "produtos" por um pre&ccedil;o superior ao valor do seu cart&atilde;o. \
<br>
Se voc&ecirc; &eacute; um Comprador, seu objetivo &eacute; comprar "mercadorias" por um pre&ccedil;o inferior ao valor do seu cart&atilde;o. \
<br>
A diferen&ccedil;a entre o valor do sua carta e o pre&ccedil;o pelo qual voc&ecirc; compra ou vende &eacute; o seu lucro. \
<br>
Para fazer um acordo com outro jogador, voc&ecirc; deve publicar uma oferta ou aceitar. Postar uma oferta pode ser feito inserindo uma oferta legal em seu dispositivo e pressionando ‘Enviar’. Voc&ecirc; tamb&eacute;m ver&aacute; ofertas de outros jogadores que aparecem em seu dispositivo. \
Se voc&ecirc; deseja aceitar uma dessas ofertas, basta clicar na oferta. \ 
</p>`



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
	var html = "<h1>How to play the game</h1>"
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
	html += "<p> The host of the game may introduce special rules for a round or for a whole game. Any special rules will be displayed on the screen during the round and on the lobby screen.<p>"
	
	// Tax
	html += "<h2>Tax</h2>";
	html += "<p><b>Tax</b> will be a flat cost that the <emp>seller</emp> must pay when they successfully sell a card."
	html += " For example;</p><p style='text-indent :1em;'><p>" + "If a card of value $10 is sold for $15 and there is currently a $2 tax in place, the seller will have $5 of before-tax profit, then after paying the $2 tax will have a net gain of $3 for the round</p>";
	html += "<p>Sale Value - Card Value - Tax = Profit<br />"
	html += "$15 - $10 - $2 = $3<p>"
	html += "<p>Tax is a real-world phenomenon that governments impose on the sale of goods and services in everyday life and this rule will demonstrate how tax may affect the free market."
	// Price ceiling/floor
	html += "<h2>Price Ceiling/Floor</h2>";
	html += "<p>When there is either a price ceiling or floor in place, there is a limit to how much a card can be brought or sold at. A price floor sets a minimum value that a card can be sold at and a price ceiling reflects a maximum value. During any particular round, there will only be <emp>one</emp> of either option and never both.<p>"
	html += "<p>The <b>floor</b> may reprent a minimum cost of production of the goods or services for a company."
	html += "<br />The <b>ceiling</b> may represent a price cap enforced on seller by a government.</p>"
	html += "<p>Note that <b>it is possible</b> that you will no longer be able to make a trade when this rule is in place. In the real world, compainies could be forced out of a market because of various policies or costs introduced.<p>"

	// Set the html
	div.innerHTML = html;	
}