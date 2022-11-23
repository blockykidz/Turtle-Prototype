Blockly.JavaScript['turtle_number'] = function (block) {
	var number_name = block.getFieldValue('NAME');
	var code = number_name;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turtle_text_1'] = function (block) {
	var text_t = block.getFieldValue('T');
	var code = `"${text_t}"`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turtle_movement'] = function (block) {
	let FN = block.getFieldValue('OP');
	let I0 = Blockly.JavaScript.valueToCode(
		block,
		'I0',
		Blockly.JavaScript.ORDER_ATOMIC
	);
	let code = `turtle.${FN}(${I0});\n`;
	return code;
};

Blockly.JavaScript['turtle_turn'] = function (block) {
	let FN = block.getFieldValue('OP');
	let I0 = Blockly.JavaScript.valueToCode(
		block,
		'I0',
		Blockly.JavaScript.ORDER_ATOMIC
	);
	let code = `turtle.${FN}(${I0});\n`;
	return code;
};

Blockly.JavaScript['turtle_pen'] = function (block) {
	let FN = block.getFieldValue('OP');
	let code = `turtle.${FN}();\n`;
	return code;
};

Blockly.JavaScript['turtle_path'] = function (block) {
	let FN = block.getFieldValue('OP');
	let code = `turtle.${FN}();\n`;
	return code;
};

Blockly.JavaScript['turtle_position'] = function (block) {
	let I0 = Blockly.JavaScript.valueToCode(
		block,
		'I0',
		Blockly.JavaScript.ORDER_ATOMIC
	);
	let I1 = Blockly.JavaScript.valueToCode(
		block,
		'I1',
		Blockly.JavaScript.ORDER_ATOMIC
	);
	let code = `turtle.setPosition(${I0}, ${I1});\n`;
	return code;
};

Blockly.JavaScript['turtle_s_s_s'] = function (block) {
	let FN = block.getFieldValue('OP');
	let I0 = Blockly.JavaScript.valueToCode(
		block,
		'I0',
		Blockly.JavaScript.ORDER_ATOMIC
	);
	let code = `turtle.${FN}(${I0});\n`;
	return code;
};

Blockly.JavaScript['turtle_text'] = function (block) {
	let FN = block.getFieldValue('OP');
	let I0 = Blockly.JavaScript.valueToCode(
		block,
		'I0',
		Blockly.JavaScript.ORDER_ATOMIC
	);
	let code = `turtle.${FN}(${I0});\n`;
	return code;
};
