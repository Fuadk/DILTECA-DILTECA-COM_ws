 export class actpaymentAccountabilityActPaymentGrid2{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public PAYMENT_NUMBER = '';
	public PAYMENT_DATE!:Date;
	public PAYMENT_DESCRIPTION = '';
	public PAYMENT_AMOUNT = '';
	public STATUS = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}

 export class actinvoicesAccountabilityActInvoicesGrid2{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public INVOICE_NUMBER = '';
	public SUPPLIER = '';
	public INVOICE_DATE!:Date;
	public INVOICE_AMOUNT = '';
	public STATUS = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}

 export class actruleActionAccountabilityActRuleActionForm{
	public RULE_ID = '';
	public ACTION_ID = '';
	public ACTION_ORDER = '';
	public ACTION_CODE = '';
	public DISABLED = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}

 export class actruleItemAccountabilityActRuleItemForm{
	public RULE_ID = '';
	public DISABLED = '';
	public ITEM = '';
	public FIELD = '';
	public OPERATION = '';
	public FIELD_VALUE = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}

 export class actruleActionAccountabilityActRuleActionGrid{
	public DISABLED = '';
	public RULE_ID = '';
	public ACTION_ORDER = '';
	public ACTION_ID = '';
	public ACTION_CODE = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}


 export class actruleItemAccountabilityActRuleItemGrid{
	public RULE_ID = '';
	public DISABLED = '';
	public ITEM = '';
	public FIELD = '';
	public OPERATION = '';
	public FIELD_VALUE = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}

 export class actruleDefAccountabilityActRuleDefForm{
	public RULE_ID = '';
	public DISABLED = '';
	public RULE_DESCRIPTION = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}


 export class actpaymentAccountabilityActPaymentForm{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public PAYMENT_DATE!:Date;
	public PAYMENT_DESCRIPTION = '';
	public STATUS = '';
	public PAYMENT_NUMBER = '';
	public PAYMENT_AMOUNT = '';
	public LOGDATE!:Date;
	public LOGNAME = '';

}



 export class actinvoicesAccountabilityActInvoicesForm{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public INVOICE_DATE!:Date;
	public STATUS = '';
	public SUPPLIER = '';
	public INVOICE_AMOUNT = '';
	public LOGDATE!:Date;
	public LOGNAME = '';
	public INVOICE_NUMBER = '';

}



 export class actfileDefAccountabilityActFileDefGrid{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public DOC_NAME = '';
	public SEPARATOR = '';
	public DOC_INFO = '';
	public LOGNAME = '';
	public LOG_DATE!:Date;

}


 export class actfieldsAccountabilityActFieldsGrid{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public REC_SEQ = '';
	public FIELD_DATA = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}

 export class actpaymentAccountabilityActPaymentGrid{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public PAYMENT_NUMBER = '';
	public PAYMENT_DATE!:Date;
	public PAYMENT_DESCRIPTION = '';
	public PAYMENT_AMOUNT = '';
	public STATUS = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}


 export class actinvoicesAccountabilityActInvoicesGrid{
	public FILE_TYPE = '';
	public FILE_NAME = '';
	public INVOICE_NUMBER = '';
	public SUPPLIER = '';
	public INVOICE_DATE!:Date;
	public INVOICE_AMOUNT = '';
	public STATUS = '';
	public LOGNAME = '';
	public LOGDATE!:Date;

}


 export class actfileDefAccountabilityActFileDefForm{
	public FILE_TYPE = '';
	public DOC_NAME = '';
	public SEPARATOR = '';
	public FILE_NAME = '';
	public DOC_INFO = '';
	public LOGNAME = '';
	public LOG_DATE!:Date;

}


export class tickeittstTickeitGrid{
	public id = '';
	public agent_id = '';
	public category_id = '';
	public completed_at:Date;
	public content = '';
	public created_at:Date;
	public priority_id = '';
	public user_id = '';
	public updated_at:Date;
	public subject = '';
	public status_id = '';

}

 export class tickeittstTickeitForm{
	public id = '';
	public agent_id = '';
	public category_id = '';
	public completed_at:Date;
	public content = '';
	public created_at:Date;
	public priority_id = '';
	public user_id = '';
	public updated_at:Date;
	public subject = '';
	public status_id = '';

}

 export class tstTickeitForm{
	public id = '';
	public agent_id = '';
	public category_id = '';
	public completed_at:Date;
	public content = '';
	public created_at:Date;
	public priority_id = '';
	public user_id = '';
	public updated_at:Date;
	public subject = '';
	public status_id = '';

}






















 
    export class tabsCodes{
	public CODE = '';
	public PARTCODE = '';
	public CODEVALUE_LANG = '';
	public CODEVALUE2 = '';
	public LANGUAGE_NAME = '';
	public CODETEXT_LANG = '';
	public FLEX_FLD1 = '';
	public FLEX_FLD2 = '';
	public FLEX_FLD3 = '';
	public FLEX_FLD4 = '';
	public FLEX_FLD5 = '';
	public CODENAME = '';
	public LAST_UPDATE = '';
	public ORDERUSER = '';
	public INS_UPD = '';

}


    export class tabsCodesSpec{
	public CODENAME = '';
	public CODE_USAGE = '';
	public CODEVALUE1_USAGE = '';
	public CODETEXT = '';
	public CODEVALUE2_USAGE = '';
	public VALUEALFA = '';
	public CODELENGTH = '';
	public TEXTLENGTH = '';
	public VALUELENGTH = '';
	public CODEALFA = '';
	public PARTCODENAME = '';
	public VALUE_UNIQUE = '';
	public CODE_PRIV = '';
	public PARTCODE_USAGE = '';
	public FLEX_FLD1 = '';
	public FLEX_FLD2 = '';
	public FLEX_FLD3 = '';
	public FLEX_FLD4 = '';
	public FLEX_FLD5 = '';
	public LAST_UPDATE = '';

}




        
    export class joinsDef{
        public CDR_TYPE_1 = '';
        public CDR_TYPE_2 = '';
        public LOGNAME = '';
        public LOGDATE = '';
        public WHERE_FILTER = '';
        public LOAD_TO_MEM = '';
        public SYNC_TABLE = '';
        public SYNC_KEY_FIELD = '';
        public SYNC_WHERE = '';
        public SYNC_DATE_FIELD = '';
        public SYNC_PROFILE = '';
        public JOIN_DEF = '';
        public FLOW_CODE = '';
    
    }
     export class menus{
        public MENU = '';
        public MENU_TYPE = '';
        public CHOICE = '';
        public TEXT = '';
        public AR_TEXT = '';
        public LINE = '';
        public LANGUAGE_NAME = '';
        public EN_TEXT = '';
        public FLEX_FLD1 = '';
        public FLEX_FLD2 = '';
        public FLEX_FLD3 = '';
        public FLEX_FLD4 = '';
        public FLEX_FLD5 = '';
        public TYPE = '';
        public FMODE = '';
    
    }
     export class userInformation{
        public USERNAME = '';
        public FULLNAME = '';
        public SIGN = '';
        public DIV = '';
        public DEPT = '';
        public PHONE = '';
        public GROUPNAME = '';
        public LANGUAGE_NAME = '';
        public IP_RESTRICT = '';
        public WEB_ENABLED = '';
        public WEB_BROWSER = '';
        public FLEX_FLD1 = '';
        public FLEX_FLD2 = '';
        public FLEX_FLD3 = '';
        public FLEX_FLD4 = '';
        public FLEX_FLD5 = '';
        public DEFAULT_PRINTER = '';
        public EXTRA_PERC = '';
        public FIN_ADMIN = '';
        public LOGDATE = '';
        public LOGNAME = '';
        public PASSWORD = '';
        public TEAM = '';
        public LEADER = '';
        public TODAY = '';
        public TOMORROW = '';
        public NOTES = '';
    
    }


     export class dataBase{
        public DATA_BASE_ID = '';
        public DATA_BASE = '';
        public DB_USER = '';
        public DB_PASS = '';
        public LOGNAME = '';
        public LOGDATE = '';
        public DB_VENDOR = '';
    
    }
 
     export class groupinfo{
        public GROUPNAME = '';
        public FULLNAME = '';
        public DEFAULT_PRINTER = '';
        public FLEX_FLD1 = '';
        public FLEX_FLD2 = '';
        public FLEX_FLD3 = '';
        public FLEX_FLD4 = '';
        public FLEX_FLD5 = '';
    
    }
    
     export class authority{
        public AUTH_TYPE = '';
        public USERNAME = '';
        public ROUTINE = '';
        public AUTHLEVEL = '';
        public DISP_FLAG = '';
        public FLEX_FLD1 = '';
        public FLEX_FLD2 = '';
        public FLEX_FLD3 = '';
        public FLEX_FLD4 = '';
        public FLEX_FLD5 = '';
    
    }

    export class queryDef{
        public QUERY_ID = '';
        public QUERY_NAME = '';
        public QUERY_TYPE = '';
        public MODULE = '';
        public SELECT_CLAUSE = '';
        public FROM_CLAUSE = '';
        public WHERE_CLAUSE = '';
        public WHERE_MAND_CLAUSE = '';
        public GROUP_ORDER_BY_CLAUSE = '';
        public LOGNAME = '';
        public LOGDATE = '';
    }
    export class dynamic{
    }
    export class dashboardDef{
        public DASHBOARD_ID = '';
        public DASHBOARD_NAME = '';
        public MODULE = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    
    export class dashboardDetail{
        public DASHBOARD_ID = '';
        public CHART_ID = '';
        public CHART_ORDER = '';
        public QUERY_ID = '';
        public CHART_TITLE = '';
        public CHART_TYPE = '';
        public CHART_WIDTH = '';
        public CHART_HEIGHT = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    export class ruleDef{
        public MODULE = '';
        public RULE_ID = '';
        public RULE_TRIGGER = '';
        public ROUTINE = '';
        public QUERY_DEF = '';
        public RULE_KEY = '';
        public RESPONSE_DATA_ID = '';
        public RESPONSE_DATA_NAME = '';
        public DISABLED = 0;
        public RULE_DESCRIPTION = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
	export class ruleAction{
		public MODULE = '';
		public RULE_ID = '';
		public ACTION_ID = '';
		public ACTION_ORDER = '';
		public ACTION_CODE = '';
		public SEND_TO = '';
		public MAP_ID = '';
		public BODY_DATA = '';
		public PARAMETER_DATA = '';
		public EXTRA_DATA = '';
		public LOGNAME = '';
		public LOGDATE = '';
		public RULE_ACTION_AND = "";
		public RULE_CONDITION_TEXT = "";
		}
    
    
    export class ruleItem{
        public MODULE = '';
        public RULE_ID = '';
        public ITEM = '';
        public FIELD = '';
        public OPERATION = '';
        public FIELD_VALUE = '';
        public LOGNAME = '';
        public LOGDATE = '';
        public RULE_AND = "";
        public RULE_CONDITION_TEXT = "";
    
    }
    
    export class ruleHost{
        public HOST_ID = '';
        public URL = '';
        public PROTOCOL = '';
        public HOST = '';
        public PATH = '';
        public PORT = '';
        public HTTP_METHOD = '';
        public AUTHORIZATION = '';
        public CONTENT_TYPE = '';
        public HEADER = '';
        public SUCCESS_MSG = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    export class ruleHostMap{
        public HOST_ID = '';
        public MAP_ID = '';
        public MAP_NAME = '';
        public XSLT_SEND = '';
        public XSLT_RECEIVE = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    export class ruleKeys{
        public COL_NAME = '';
        public SELECTED = 0;
    }
    export class ruleLog{
        public RULE_ID = '';
        public RULE_KEY = '';
        public ACTION_ID = '';
        public STATUS = '';
        public MSG_RESPONSE = '';
        public MODULE = '';
        public SENT_DATE:Date;
        public MSG_RECEIVED = '';
        public PARAMETER_SENT = '';
        public BODY_SENT = '';
        public LOGDATE = '';
        public LOGNAME = '';
    
    }
  
    export class formPage{
        public FORM_NAME = '';
        public PAGE_NO = '';
        public PAGE_ORDER = '';
        public PAGE_TYPE = '';
        public PAGE_TITLE = '';
        public PAGE_ICON = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    
    export class formArea{
        public FORM_NAME = '';
        public PAGE_NO = '';
        public AREA_NO = '';
        public AREA_TYPE = '';
        public AREA_TITLE = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    export class formFields{
        public FORM_NAME = '';
        public PAGE_NO = 0;
        public AREA_NO = 0;
        public FIELD_ID = '';
        public FIELD_ROW = 0;
        public FIELD_ORDER = 0;
        public FIELD_NAME = '';
        public FIELD_TYPE = '';
        public FIELD_LOOKUP = '';
        public FIELD_DEFAULT = '';
        public FIELD_REQUIRED = '';
        public FIELD_FORMAT = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }
    export class formDef{
        public FORM_NAME = '';
        public FORM_DESC = '';
        public LOGNAME = '';
        public LOGDATE = '';
    
    }


   export class routines{
        public ROUTINE_NAME = '';
        public RTYPE = '';
        public PROGRAM = '';
        public CHOICE = '';
        public ROUT_VER = '';
        public ROUTINE_DESC = '';
        public HELP_FILE = '';
        public MODULE = '';
        public FLEX_FLD1 = '';
        public FLEX_FLD2 = '';
        public FLEX_FLD3 = '';
        public FLEX_FLD4 = '';
        public FLEX_FLD5 = '';
    
    }
	export class trans{
		public LOGDATE : Date  ;
		public LOGNAME = '';
		public TRANS = '';
	
	}
    export class tst1Upload{
        public id = '';
        public agent_id = '';
        public category_id = '';
        public completed_at:Date;
        public content = '';
        public created_at:Date;
        public priority_id = '';
        public user_id = '';
        public updated_at:Date;
        public subject = '';
        public status_id = '';
    }
	export class componentConfigDef{
		public eventFrom =  null;
        public eventTo =  null;
		public languageChanged = "EN";
        public showToolBar = null;
        public masterSaved = null;
        public masterDeleted = null;
        public parentClose = null;
        public formMode = null;
        public savingMode = null;
        public isMaster = null;
        public isChild = null;
        public masterKey = null;
        public AUTH_TYPE = null;
        public formattedWhere = null;
        public formattedWhere2 = null;
        public clearComponent = null;
        public otherMasterKey =  null;
        public gridHeight = null;
        public formHeight = null;
        public routineAuth = null;
        public showAll = null;
        public editable = null;
        public masterParams = null;
        public queryable = null;
		public navigable = null;
        public insertable = null;
		public removeable = null;
		public enabled = null;
		public updateable = null;
        	public toolsShow = null;
        public masterReadCompleted = null;
        public masterKeyArr = [];
        public masterKeyNameArr = [];
        public showTitle = null;
        public showSave = null;
        public title = null;
        public hideGrid = null;
        public clearScreen = null;
        public setScreen = null;
        public WEEKShow = null;
        public showToolbar = null;
        public useAutoSave = null;
    }