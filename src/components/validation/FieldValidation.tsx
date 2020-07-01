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
			if(!parameter['isEmpty']  && globalValue['isvalid'] ){
				globalValue['isvalid'] = value.length >0;

			}
		}
	}
	__EqualTo(value,parameter){
		if(typeof(parameter['equalto']) != "undefined"){
			if( globalValue['isvalid'] ){
				
				let value_return = "";
				globalValue['value'].forEach((k,v) => {
					
					if(k['name'] === parameter["equalto"]){
						
						value_return =k['value']
					}
				});
				 
				globalValue['isvalid'] = value===value_return ;

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

		if(globalValue['isvalid'] ){
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
			self.__EqualTo( value['value'],value['parameter'] );

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
