export interface StatesProps {
    myCart?: any;
    setMyCart?: any;
    good?: any;
    index?: number;
    cartSize?: number;
    setCartSize?: any;
    setModal?: any;
    setModalClasses?: any;
    itemParams?: any;
}

export interface GoodsProps extends StatesProps {
    goods: Object;
    anchors: string[];
}

export interface ModalProps extends StatesProps {
    classes: string;
}

export interface ModalFieldsProps {
    label: string;
    areaType?: string;
    id: string;
    type?: string;
    required?: boolean;
}
