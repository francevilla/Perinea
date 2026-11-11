export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Chiave pubblica di Web3Forms (non un segreto: è l'alias della casella email
 * di destinazione, usata solo per inviare le submission). Si può sovrascrivere
 * con l'env NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
  "70a2c86a-3a8d-4a36-8e52-52c2061baea0";

export const WEB3FORMS_SUBJECT = "Nuovo messaggio dal sito Perinea";
export const WEB3FORMS_FROM_NAME = "Perinea";

export type Web3FormsPayload = {
  access_key: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
  from_name: string;
  botcheck?: string;
};

export function buildPayload(formData: FormData): Web3FormsPayload {
  const payload: Web3FormsPayload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: (formData.get("name") ?? "").toString().trim(),
    email: (formData.get("email") ?? "").toString().trim(),
    phone: (formData.get("phone") ?? "").toString().trim() || undefined,
    message: (formData.get("message") ?? "").toString().trim(),
    subject: WEB3FORMS_SUBJECT,
    from_name: WEB3FORMS_FROM_NAME,
  };
  if (formData.get("botcheck")) {
    payload.botcheck = (formData.get("botcheck") ?? "").toString();
  }
  return payload;
}

export async function submitWeb3Form(payload: Web3FormsPayload) {
  const body = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      body.append(key, value);
    }
  });

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body,
  });

  const data = (await response.json()) as {
    success?: boolean;
    message?: string;
  };
  return { ok: response.ok, success: !!data.success, message: data.message };
}
