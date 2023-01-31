export interface IBox {
  id: string,
  width: number | string,
  height: number | string,
  backgroundColor: string,
}

export interface IBoxProps extends IBox {
  remove: (id: string) => void
}

export interface INewBoxFormProps {
  createBox: (newBox: IBox) => void
}

export interface IFormData {
  height: string,
  width: string,
  backgroundColor: string,
}

// TODO: Ask if you can export these all one one line