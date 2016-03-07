import React from 'react';
import MessageList from './ChildComponent.js';

function MySpecialComponentIWantToRewire() {
	return <div>Output</div>;
}

function ComponentToRewirePerElement({ element, children }) {
	return <div key={element.get('id')}>{children}</div>;
}

export let rewireInlineComponent = () => {
	let _MySpecialComponentIWantToRewire_Component = _get__('MySpecialComponentIWantToRewire');

	return <_MySpecialComponentIWantToRewire_Component />;
};

export let rewireWitMap = () => {
	return <div>
		{array.map(element => {
			let _ComponentToRewirePerElement_Component = _get__('ComponentToRewirePerElement');

			return <_ComponentToRewirePerElement_Component element={element}>
				{element.get('text')}
			</_ComponentToRewirePerElement_Component>;
		})}
	</div>;
};

export function another() {
	let _MessageList_Component = _get__('MessageList');

	return <_MessageList_Component />;
};

export let arrowWithReturn = () => {
	let _MessageList_Component2 = _get__('MessageList');

	return <_MessageList_Component2 />;
};

let _DefaultExportValue = () => {
	let _MessageList_Component3 = _get__('MessageList');

	return <_MessageList_Component3 />;
};

export default _DefaultExportValue;
var _RewiredData__ = {};
let _RewireAPI__ = {};

(function () {
	function addPropertyToAPIObject(name, value) {
		Object.defineProperty(_RewireAPI__, name, {
			value: value,
			enumerable: false,
			configurable: true
		});
	}

	addPropertyToAPIObject('__get__', _get__);
	addPropertyToAPIObject('__GetDependency__', _get__);
	addPropertyToAPIObject('__Rewire__', _set__);
	addPropertyToAPIObject('__set__', _set__);
	addPropertyToAPIObject('__reset__', _reset__);
	addPropertyToAPIObject('__ResetDependency__', _reset__);
	addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
	return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
}

function _get_original__(variableName) {
	switch (variableName) {
		case 'MySpecialComponentIWantToRewire':
			return MySpecialComponentIWantToRewire;

		case 'ComponentToRewirePerElement':
			return ComponentToRewirePerElement;

		case 'MessageList':
			return MessageList;
	}

	return undefined;
}

function _assign__(variableName, value) {
	if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
		return _set_original__(variableName, value);
	} else {
		return _RewiredData__[variableName] = value;
	}
}

function _set_original__(variableName, _value) {
	switch (variableName) {}

	return undefined;
}

function _update_operation__(operation, variableName, prefix) {
	var oldValue = _get__(variableName);

	var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	_assign__(variableName, newValue);

	return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
	return _RewiredData__[variableName] = value;
}

function _reset__(variableName) {
	delete _RewiredData__[variableName];
}

function _with__(object) {
	var rewiredVariableNames = Object.keys(object);
	var previousValues = {};

	function reset() {
		rewiredVariableNames.forEach(function (variableName) {
			_RewiredData__[variableName] = previousValues[variableName];
		});
	}

	return function (callback) {
		rewiredVariableNames.forEach(function (variableName) {
			previousValues[variableName] = _RewiredData__[variableName];
			_RewiredData__[variableName] = object[variableName];
		});
		let result = callback();

		if (!!result && typeof result.then == 'function') {
			result.then(reset).catch(reset);
		} else {
			reset();
		}

		return result;
	};
}

let typeOfOriginalExport = typeof _DefaultExportValue;

function addNonEnumerableProperty(name, value) {
	Object.defineProperty(_DefaultExportValue, name, {
		value: value,
		enumerable: false,
		configurable: true
	});
}

if ((typeOfOriginalExport === 'object' || typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {
	addNonEnumerableProperty('__get__', _get__);
	addNonEnumerableProperty('__GetDependency__', _get__);
	addNonEnumerableProperty('__Rewire__', _set__);
	addNonEnumerableProperty('__set__', _set__);
	addNonEnumerableProperty('__reset__', _reset__);
	addNonEnumerableProperty('__ResetDependency__', _reset__);
	addNonEnumerableProperty('__with__', _with__);
	addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

export { _get__ as __get__, _get__ as __GetDependency__, _set__ as __Rewire__, _set__ as __set__, _reset__ as __ResetDependency__, _RewireAPI__ as __RewireAPI__ };