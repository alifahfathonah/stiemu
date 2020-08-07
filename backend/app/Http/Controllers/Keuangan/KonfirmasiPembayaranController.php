<?php

namespace App\Http\Controllers\Keuangan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Keuangan\TransaksiModel;
use App\Models\Keuangan\TransaksiDetailModel;
use App\Models\Keuangan\KonfirmasiPembayaranModel;
use App\Helpers\Helper;

class KonfirmasiPembayaranController extends Controller {  
    /**
     * daftar komponen biaya
     */
    public function index(Request $request)
    {
        $this->hasPermissionTo('KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE');
        
        $this->validate($request, [           
            'TA'=>'required',
        ]);
        $ta=$request->input('TA');
        
        $daftar_transaksi=[];

        if ($this->hasRole(['mahasiswabaru','mahasiswa']))
        {
            $userid=$this->getUserid();
            $daftar_transaksi = TransaksiModel::select(\DB::raw('
                                                    pe3_transaksi.id,
                                                    pe3_transaksi.user_id,
                                                    pe3_formulir_pendaftaran.nama_mhs,
                                                    pe3_transaksi.no_transaksi,
                                                    pe3_transaksi.no_faktur,
                                                    pe3_transaksi.kjur,
                                                    pe3_transaksi.ta,
                                                    pe3_transaksi.idsmt,
                                                    pe3_transaksi.idkelas,
                                                    COALESCE(pe3_transaksi.no_formulir,"N.A") AS no_formulir,
                                                    COALESCE(pe3_transaksi.nim,"N.A") AS nim,
                                                    pe3_transaksi.status,
                                                    pe3_status_transaksi.nama_status,
                                                    pe3_status_transaksi.style,
                                                    CASE 
                                                        WHEN pe3_konfirmasi_pembayaran.verified IS NULL THEN "N.A"
                                                        WHEN pe3_konfirmasi_pembayaran.verified=0 THEN "UNVERIFIED"
                                                        WHEN pe3_konfirmasi_pembayaran.verified=1 THEN "VERIFIED"
                                                    END AS status_konfirmasi,
                                                    pe3_transaksi.total,
                                                    pe3_transaksi.tanggal,                                                
                                                    pe3_transaksi.created_at,
                                                    pe3_transaksi.updated_at
                                                '))
                                                ->join('pe3_status_transaksi','pe3_transaksi.status','pe3_status_transaksi.id_status')
                                                ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','pe3_transaksi.user_id')
                                                ->leftJoin('pe3_konfirmasi_pembayaran','pe3_konfirmasi_pembayaran.transaksi_id','pe3_transaksi.id')
                                                ->where('pe3_transaksi.ta',$ta)
                                                ->where('pe3_transaksi.user_id',$userid)
                                                ->orderBy('tanggal','DESC')
                                                ->get();
        }
        else
        {
            $daftar_transaksi = TransaksiModel::select(\DB::raw('
                                                    pe3_transaksi.id,
                                                    pe3_transaksi.user_id,
                                                    pe3_formulir_pendaftaran.nama_mhs,
                                                    pe3_transaksi.no_transaksi,
                                                    pe3_transaksi.no_faktur,
                                                    pe3_transaksi.kjur,
                                                    pe3_transaksi.ta,
                                                    pe3_transaksi.idsmt,
                                                    pe3_transaksi.idkelas,
                                                    COALESCE(pe3_transaksi.no_formulir,"N.A") AS no_formulir,
                                                    COALESCE(pe3_transaksi.nim,"N.A") AS nim,
                                                    pe3_transaksi.status,
                                                    pe3_status_transaksi.nama_status,
                                                    pe3_status_transaksi.style,
                                                    CASE 
                                                        WHEN pe3_konfirmasi_pembayaran.verified IS NULL THEN "N.A"
                                                        WHEN pe3_konfirmasi_pembayaran.verified=0 THEN "UNVERIFIED"
                                                        WHEN pe3_konfirmasi_pembayaran.verified=1 THEN "VERIFIED"
                                                    END AS status_konfirmasi,
                                                    pe3_transaksi.total,
                                                    pe3_transaksi.tanggal,                                                
                                                    pe3_transaksi.created_at,
                                                    pe3_transaksi.updated_at
                                                '))
                                                ->join('pe3_status_transaksi','pe3_transaksi.status','pe3_status_transaksi.id_status')
                                                ->join('pe3_formulir_pendaftaran','pe3_formulir_pendaftaran.user_id','pe3_transaksi.user_id')
                                                ->leftJoin('pe3_konfirmasi_pembayaran','pe3_konfirmasi_pembayaran.transaksi_id','pe3_transaksi.id')
                                                ->where('pe3_transaksi.ta',$ta)                                                
                                                ->orderBy('tanggal','DESC')
                                                ->get();
        }    
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',  
                                    'transaksi'=>$daftar_transaksi,                                                                                                                                   
                                    'message'=>'Fetch data daftar transaksi berhasil.'
                                ],200);     
    }  
    public function store(Request $request)
    {
        $this->hasPermissionTo('KEUANGAN-KONFIRMASI-PEMBAYARAN_STORE');
        
        $this->validate($request, [                       
            'transaksi_id'=>'required|exists:pe3_transaksi,id',
            'id_channel'=>'required|exists:pe3_channel_pembayaran,id_channel',
            'nomor_rekening_pengirim'=>'required|numeric',
            'nama_rekening_pengirim'=>'required',
            'nama_bank_pengirim'=>'required',
            'total_bayar'=>'required|numeric',
            'bukti_bayar'=>'required',
        ]);
        $transaksi_id=$request->input('transaksi_id');
        $transaksi=TransaksiModel::find($transaksi_id);
        $bukti_bayar=$request->file('bukti_bayar');
        $mime_type=$bukti_bayar->getMimeType();
        if ($mime_type=='image/png' || $mime_type=='image/jpeg')
        {
            $folder=Helper::public_path('images/buktibayar/');
            $file_name=uniqid('img').".".$bukti_bayar->getClientOriginalExtension();

            $konfirmasi=KonfirmasiPembayaranModel::updateOrCreate([
                'transaksi_id'=>$transaksi_id,                
                'user_id'=>$transaksi->user_id,                
                'no_transaksi'=>$transaksi->no_transaksi,
                'id_channel'=>$request->input('id_channel'),
                'total_bayar'=>$request->input('total_bayar'),
                'nomor_rekening_pengirim'=>$request->input('nomor_rekening_pengirim'),
                'nama_rekening_pengirim'=>$request->input('nama_rekening_pengirim'),
                'nama_bank_pengirim'=>$request->input('nama_bank_pengirim'),
                'desc'=>$request->input('desc'),
                'tanggal_bayar'=>$request->input('tanggal_bayar'),                
                'bukti_bayar'=>"storage/images/buktibayar/$file_name",  
            ]);
            $bukti_bayar->move($folder,$file_name);
            return Response()->json([
                                        'status'=>0,
                                        'pid'=>'store',
                                        'konfirmasi'=>$konfirmasi,                
                                        'message'=>"Konfirmasi pembayaran untuk kode_billing ('.$transaksi->no_transaksi.')   berhasil diupload"
                                    ],200);  
        }      
        else
        {
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'store',
                                        'message'=>["Extensi file yang diupload bukan jpg atau png."]
                                    ],422); 
        }  
    }
}