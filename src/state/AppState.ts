export interface FormState {
  step: number,
}

export interface FormData {
  title: string,
  name: string,
  surname: string,
  gender: string,
  ukResident: string,
}

export interface AppState {
  formState: FormState,
  formData: FormData,
}
