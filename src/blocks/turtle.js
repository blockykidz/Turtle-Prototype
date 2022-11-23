Blockly.Blocks['turtle_number'] = {
	init: function () {
		this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'NAME');
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_text_1'] = {
	init: function () {
		this.appendDummyInput().appendField(
			new Blockly.FieldTextInput('default'),
			'T'
		);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_movement'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.appendField(
				new Blockly.FieldDropdown([
					['move forward', 'forward'],
					['move backward', 'back'],
				]),
				'OP'
			)
			.appendField('steps');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_turn'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.appendField(
				new Blockly.FieldDropdown([
					['turn left', 'left'],
					['turn right', 'right'],
				]),
				'OP'
			)
			.appendField('degree');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(330);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_pen'] = {
	init: function () {
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['pen up', 'penUp'],
				['pen down', 'penDown'],
			]),
			'OP'
		);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(260);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_path'] = {
	init: function () {
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['begin path', 'beginPath'],
				['close path', 'closePath'],
			]),
			'OP'
		);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(360);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_position'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('locate at')
			.appendField('x');
		this.appendValueInput('I1')
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('y');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(290);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_s_s_s'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(
				new Blockly.FieldDropdown([
					['set size', 'setSize'],
					['set speed', 'setSpeed'],
					['set sleep time', 'sleep'],
				]),
				'OP'
			);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(390);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['turtle_text'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(
				new Blockly.FieldDropdown([
					['write fill text', 'fillText'],
					['write stroke text', 'strokeText'],
				]),
				'OP'
			);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
