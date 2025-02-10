'use client'
import React from 'react'
import MessageStatus from '../components/MessageStatus'
import useMenuCode from '@/app/global/hooks/useMenuCode'

const MessageStatusContainer = () => {
  useMenuCode('message', 'messageStatus')

  return <MessageStatus />
}

export default React.memo(MessageStatusContainer)