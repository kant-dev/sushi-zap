"use client"

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogPortal, DialogOverlay } from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import StepUser from './StepUser'
import StepAddress from './StepAddress'
import StepFinaly from './StepFinaly'
import { Steps } from '@/types/Step'


const StepTitle: Record<Steps, string> = {
  'user': 'Dados Pessoais',
  'address': 'Endereço de Entrega',
  'finish': 'Finalizando Pedido',
}

type CheckDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void;
}

export default function CheckDialog({ open, onOpenChange }: CheckDialogProps) {
  const [step, setStep] = useState<Steps>('user')

  const stepNumber = Object.keys(StepTitle).indexOf(step) + 1;

  const progressPercent = (stepNumber/ Object.keys(StepTitle).length * 100)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>

        <DialogOverlay className="fixed inset-0 bg-black opacity-50" />

        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>
              {
                step === 'user'
                  ? 'Dados Pessoais'
                  : step === 'address'
                    ? 'Endereço de Entrega'
                    : 'Finalizando Pedido'
              }
            </DialogTitle>
          </DialogHeader>

          <Progress value={progressPercent} className="my-4" />

          <div className='flex flex-col gap-3'>
            {
              step === 'user'
                ? <StepUser setStep={setStep}/>
                : step === 'address'
                  ? <StepAddress setStep={setStep}/>
                  : <StepFinaly />
            }
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
