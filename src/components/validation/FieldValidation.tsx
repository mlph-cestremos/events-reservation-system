let globalValue = {};
globalValue['parameter'] = {};
class FieldValidations{
	
	constructor(value){
			globalValue['value']=value;
	
			globalValue['isvalid']=true;
			globalValue['message']="";
		
		this.__initialize();
	}
	__isEmpty(value,parameter){
		if(typeof(parameter['isEmpty']) != "undefined"){
			if(parameter['isEmpty'] ==false && globalValue['isvalid'] ==true){
				globalValue['isvalid'] = value.length >0;

			}
		}
	}

	__minMaxChar(value,parameter){
		
		let min_len = 0;
		let max_len = 0;
		let is_max = false;
		if(typeof(parameter['min']) != "undefined"){
			min_len = parseInt(parameter['min']);
		}

		if(typeof(parameter['max']) != "undefined"){
		 	 is_max = true;
		 	max_len = parameter['max'];
		}

		if(globalValue['isvalid'] ==true){
			if(is_max){
				globalValue['isvalid'] = value.length >=min_len && value.length <=max_len;
			}else{
			
				globalValue['isvalid'] = value.length >=min_len;
			}
		}
		
	}



	__initialize(){
		
		let self = this;
		for(var k in globalValue['value']){
			var value = globalValue['value'][k];
			
			self.__isEmpty( value['value'],value['parameter'] );
			self.__minMaxChar( value['value'],value['parameter'] );

		}
	}
	message(){
		
		
		return ( globalValue['message'] );
	}
	isValid(){
		
		return globalValue['isvalid'];
	}
}

export default function  FieldValidation (value){
	const fields =new FieldValidations(value); 
	return 	fields;
};
