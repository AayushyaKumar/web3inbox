import React from 'react'

interface IWebsiteIconProps {
  fillColor?: string
}

const WebsiteIcon: React.FC<IWebsiteIconProps> = () => {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8C15 12.1421 11.6421 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8ZM12.8875 8.74951C13.1881 8.74951 13.4224 9.01378 13.3572 9.30729C12.9872 10.9721 11.9256 12.3765 10.4895 13.2034C10.2869 13.32 10.0693 13.1008 10.1563 12.8839C10.5645 11.8654 10.8473 10.6095 10.9535 9.2261C10.9739 8.95973 11.193 8.74951 11.4601 8.74951H12.8875ZM13.3569 6.69166C13.4222 6.98519 13.188 7.24951 12.8873 7.24951H11.4601C11.1929 7.24951 10.9738 7.03931 10.9534 6.77296C10.8472 5.38991 10.5644 4.13434 10.1563 3.11609C10.0693 2.89915 10.2869 2.67999 10.4895 2.79661C11.9253 3.62333 12.9868 5.0273 13.3569 6.69166ZM8.95471 7.24951C9.24088 7.24951 9.46958 7.00949 9.44432 6.72443C9.32369 5.36337 9.01649 4.19007 8.6156 3.33103C8.33609 2.73208 8.06616 2.40117 7.86184 2.21912C7.65072 2.03101 7.34928 2.03101 7.13816 2.21912C6.93384 2.40117 6.66391 2.73208 6.3844 3.33103C5.98352 4.19007 5.67631 5.36337 5.55569 6.72443C5.53042 7.00949 5.75912 7.24951 6.0453 7.24951H8.95471ZM3.53995 7.24951C3.80709 7.24951 4.02616 7.03931 4.04661 6.77296C4.15283 5.38991 4.43561 4.13434 4.84371 3.11609C4.93066 2.89915 4.71308 2.67999 4.51055 2.79661C3.07467 3.62333 2.01321 5.0273 1.64306 6.69166C1.57778 6.98519 1.81204 7.24951 2.11275 7.24951H3.53995ZM1.64283 9.30729C1.57761 9.01378 1.81186 8.74951 2.11253 8.74951H3.53987C3.80702 8.74951 4.0261 8.95973 4.04654 9.2261C4.1527 10.6095 4.43552 11.8654 4.84371 12.8839C4.93066 13.1008 4.71308 13.32 4.51055 13.2034C3.07437 12.3765 2.01277 10.9721 1.64283 9.30729ZM5.5556 9.27456C5.53035 8.98951 5.75905 8.74951 6.04521 8.74951H8.95479C9.24095 8.74951 9.46965 8.98951 9.4444 9.27456C9.32384 10.636 9.01658 11.8097 8.6156 12.669C8.33609 13.2679 8.06616 13.5988 7.86184 13.7809C7.65072 13.969 7.34928 13.969 7.13816 13.7809C6.93384 13.5988 6.66391 13.2679 6.3844 12.669C5.98342 11.8097 5.67616 10.636 5.5556 9.27456Z"
        fill="currentcolor"
      />
    </svg>
  )
}

export default WebsiteIcon