import supabase from '../lib/supabase';

export async function createQRCode(data) {
  const { data: qrCode, error } = await supabase
    .from('qr_codes_user')
    .insert([data])
    .select();
  
  if (error) {
    throw new Error(error.message);
  }
  
  return qrCode[0];
}

export async function getUserQRCodes(userId) {
  const { data: qrCodes, error } = await supabase
    .from('qr_codes_user')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) {
    throw new Error(error.message);
  }
  
  return qrCodes;
}

export async function getQRCodeById(id, userId) {
  const { data: qrCode, error } = await supabase
    .from('qr_codes_user')
    .select('*')
    .eq('id', id)
    .eq('user_id', userId)
    .single();
  
  if (error) {
    throw new Error(error.message);
  }
  
  return qrCode;
}

export async function updateQRCode(id, userId, data) {
  const { data: qrCode, error } = await supabase
    .from('qr_codes_user')
    .update(data)
    .eq('id', id)
    .eq('user_id', userId)
    .select();
  
  if (error) {
    throw new Error(error.message);
  }
  
  return qrCode[0];
}

export async function deleteQRCode(id, userId) {
  const { error } = await supabase
    .from('qr_codes_user')
    .delete()
    .eq('id', id)
    .eq('user_id', userId);
  
  if (error) {
    throw new Error(error.message);
  }
  
  return true;
}

export async function trackQRScan(qrCodeId, scanData) {
  const { data: scan, error } = await supabase
    .from('qr_scans_user')
    .insert([{
      qr_code_id: qrCodeId,
      ...scanData
    }])
    .select();
  
  if (error) {
    throw new Error(error.message);
  }
  
  return scan[0];
}

export async function getQRScans(qrCodeId) {
  const { data: scans, error } = await supabase
    .from('qr_scans_user')
    .select('*')
    .eq('qr_code_id', qrCodeId)
    .order('created_at', { ascending: false });
  
  if (error) {
    throw new Error(error.message);
  }
  
  return scans;
}