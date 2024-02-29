import { IOrder } from '@/types/order'
import { DELIVERY_CHARGE, IPaymentParams, PaymentResponse } from '@/types/payment'
import { RequestPayParams, RequestPayResponse, RequestPayResponseCallback } from '@/types/portone'

import { OrderFormInterface } from '../schema/order'

export function initializePaymentModule() {
  if (!window.IMP) return
  console.log('initialize IMP')
  window.IMP.init(`${process.env.NEXT_PUBLIC_PORTONE_ID_CODE}`)
}

export function getMerchantUID(orderIdfromServer: number) {
  return `mid_${new Date().getTime()}_${orderIdfromServer}_${crypto.randomUUID()}`
}

export function requestPayment(body: RequestPayParams, callback: RequestPayResponseCallback) {
  console.log('portone request', body)

  if (!window.IMP) return
  return window.IMP?.request_pay(body, callback)
}

export const createPaymentParamFactory = (data: OrderFormInterface, orders: IOrder, orderName: string) => ({
  getPaymentResquestParam: (): IPaymentParams => {
    return {
      orderId: orders.orderId,
      totalPrice: orders.totalAmount,
      paymentMethod: data.payment_method,
      couponId: !data.coupon ? null : Number(data.coupon),
    }
  },
  getProtOneRequestParam: (paymentResponse: PaymentResponse): RequestPayParams => {
    console.log(paymentResponse)
    return {
      pg: String(data.payment_method),
      pay_method: 'card',
      name: `${orderName}`,
      merchant_uid: getMerchantUID(paymentResponse.paymentId),
      amount: Number(paymentResponse.totalAmount + DELIVERY_CHARGE),
    }
  },
})

PortOneCallback(
  paymentRes,
  () => {
    router.push(
      `${basePath}/order-complete/${paymentRes.paymentId}?orderName=${name}&memberName=${orders.memberName}&paid_amount=${paid_amount}`,
    )
  },
  (msg: string | undefined, destination: string) => {
    if (msg) {
      openCheckModal(msg, () => router.push(`${basePath}`))
    } else {
      router.push(`${basePath}`)
    }
  }
)

class PortoneDto {
  private constructor() {
  }

  success() {
    return new PortoneDto()
  }
  
  fail() {
    return new PortoneDto()
  }
}



// Success Callback
// Fail Callback
export const PortOneCallback = async ({ status, error_msg, success }: RequestPayResponse) => {
  if (error_msg || !success) {
    return postprocess(PortoneDto.fail('포트원 결제 시 에러 발생', error_msg))
  }

  if (status !== 'paid') {
    return postprocess(PortoneDto.fail('결제 완료 상태가 아님', undefined/* error_msg */))
  }
  
  return postprocess(PortoneDto.success())
}

// const verify_response = await fetchPaymentVerify(
//   encodePaymentVerifyParams(portResponse.imp_uid!, paymentRes.paymentId)
// )
// if (verify_response.msg) {
//   return postprocess(PortoneDto.fail('포트원 결제 및 DB 검증 시 실패', verify_response.msg))
// }

PortOneCallback(
  // postprocess
  ({ success, type, error_msg }) => {
    if (success) {

    }

  }
)


function response_verification({ status, error_msg, success }) {

  if (error_msg || !success) {
    return postprocess(PortoneDto.fail('포트원 결제 시 에러 발생', error_msg))
  }

  if (status !== 'paid') {
    return postprocess(PortoneDto.fail('결제 완료 상태가 아님', undefined/* error_msg */))
  }
}

()
  .then(response_verification)
  .then(payment_verification)
  .catch(show_modal)